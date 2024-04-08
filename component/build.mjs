import babel from "@babel/core";
import dts from "bun-plugin-dts-auto";

// Bundling production version
await Bun.build({
    entrypoints: ["./src/index.tsx"],
    target: "browser",
    outdir: "./lib",
    minify: true,
    plugins: [dts()],
});

// Bundling serve version
// We also have to bundle this for a production release because
// even if the webpart won't use it - the dynamic import has to be resolved by webpack
await Bun.build({
    entrypoints: ["./src/index.tsx"],
    target: "browser",
    outdir: "./serve",
    sourcemap: "external",
});

console.info("✅ Bundling completed");

// Down-compile ESNext to ES5 so the webpart can bundle it in production
await babel.transformFileAsync("./lib/index.js", {
    compact: false, // because the bundle includes all dependencies, we will reach the 500KB limit of compact
});

console.info("✅ Transforming completed");
