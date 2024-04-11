import babel from "@babel/core";
import dts from "bun-plugin-dts-auto";

// Watch index file so hot reload works
require("./src/index");

// Bundling production version
await Bun.build({
    entrypoints: ["./src/index.tsx"],
    target: "browser",
    outdir: "./lib",
    sourcemap: "external",
    plugins: [dts()],
});

console.info("✅ Bundling completed");

// Down-compile ESNext to ES5 so the webpart can bundle it in production
const result = await babel.transformFileAsync("./lib/index.js", {
    compact: false, // because the bundle includes all dependencies, we will reach the 500KB limit of compact
    presets: ["@babel/preset-env"],
});

if (!result) {
    throw new Error("Babel transform failed");
}

await Bun.write(Bun.file("./lib/index.js"), result.code);

console.info("✅ Transforming completed");

// Make sure to import this file in your webpart or extension
// to make sure spfx serve will reload after changing a file in /component
const signalFile = Bun.file("../spfx/src/hot-reload.ts");

// Save hot-reload.ts without changing, will trigger reload of spfx serve
if (await signalFile.exists()) {
    await Bun.write(signalFile, await signalFile.text());

    console.info("✅ Signal to reload webpart sent");
} else {
    console.warn("🟡 Cannot send signal to reload webpart because /spfx/src/hot-reload.ts is missing");
}
