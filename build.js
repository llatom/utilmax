const esbuild = require('esbuild');

esbuild
    .build({
        entryPoints: ['src/index.ts'],
        outdir: 'lib',
        bundle: true,
        sourcemap: true,
        minifyWhitespace: true,
        splitting: true,
        format: 'esm',
        target: ['esnext']
    })
    .catch(() => process.exit(1));