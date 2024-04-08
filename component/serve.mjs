// Watch index file so hot reload works
require("./src/index");

// Bundling serve version
await Bun.build({
    entrypoints: ["./src/index.tsx"],
    target: "browser",
    outdir: "./serve",
    sourcemap: "external",
});

console.info("✅ Bundling completed");

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
