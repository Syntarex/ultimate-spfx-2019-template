import serveStatic from "serve-static-bun";

// Watch index file so hot reload works
require("./src/index");

await Bun.build({
    entrypoints: ["./src/index.tsx"],
    target: "browser",
    outdir: "./serve",
});

console.info("✅ Bundling completed");

const cert = Bun.file("../ssl.crt");
const key = Bun.file("../ssl.key");

const https = (await cert.exists()) && (await key.exists());

if (!https) {
    console.warn("🟡 SSL is disabled! See README.md for more information.");
} else {
    console.info("✅ SSL is activated");
}

Bun.serve({ fetch: serveStatic("./serve"), cert: https ? cert : undefined, key: https ? key : undefined });

console.info(`✅ Serve started: http${https ? "s" : ""}://localhost:3000/index.js`);
