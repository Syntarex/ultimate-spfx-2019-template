import babel from "@babel/core";
import dts from "bun-plugin-dts-auto";

await Bun.build({
    entrypoints: ["./src/index.tsx"],
    target: "browser",
    outdir: "./lib",
    minify: true,
    plugins: [dts()],
});

console.info("✅ Bundling completed");

await babel.transformFileAsync("./lib/index.js", {
    compact: false, // because the bundle includes all dependencies, we will reach the 500KB limit of compact
});

console.info("✅ Transforming completed");
