const esbuild = require("esbuild");

esbuild.buildSync({
  entryPoints: ["lib/index.js"],
  bundle: true,
  minify: true,
  sourcemap: true,
  format: "esm",
  outdir: "public",
  logLevel: "info",
});
