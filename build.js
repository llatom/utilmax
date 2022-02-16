const esbuild = require("esbuild");

esbuild
  .build({
    entryPoints: ["src/index.ts"],
    outfile: "lib/utilmax.min.js",
    bundle: true,
    sourcemap: true,
    minifyWhitespace: true,
    splitting: false,
    format: "esm",
    target: ["esnext"],
  })
  .catch(() => process.exit(1));
