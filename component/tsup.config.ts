import fs from "node:fs/promises";
import { defineConfig } from "tsup";

export default defineConfig((options) => ({
    entry: ["src/index.tsx"],
    minify: !options.watch, // Minify in production
    sourcemap: false, // Do not generate source maps. The spfx buildchain will kill them anyway
    dts: true, // Generate type definitions of index file
    noExternal: [/(.*)/], // Include used node_modules in bundle
    onSuccess: async () => {
        await fs.writeFile(
            "./../spfx/src/index.ts",
            "// DO NOT DELETE THIS FILE. This file will be used to trigger the webpack reload of the spfx buildchain if your package changes.",
        );

        console.info("🚀 Trigger spfx reloading");
    },
}));
