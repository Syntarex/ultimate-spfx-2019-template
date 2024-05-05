import { defineConfig } from "tsup";

export default defineConfig((options) => ({
    entry: ["src/index.tsx"],
    minify: !options.watch, // Minify in production
    sourcemap: false, // Do not generate source maps. The spfx buildchain will kill them anyway
    clean: true, // Cleanup build directory
    dts: true, // Generate type definitions of index file
    noExternal: [/(.*)/], // Include used node_modules in bundle
    onSuccess: async () => {
        console.log("TODO: Shadow safe the index.ts in spfx package");
    },
}));
