import esbuild from 'esbuild'

const buildDirectory = 'dist'

const entryPoints = ['src/index.js'];
const production = false

const defaultSettings = {
  bundle: true,
  outdir: buildDirectory,
  minify: production,
  sourcemap: !production,
  target: production ? 'es6' : 'esnext',
  entryPoints,
};

esbuild
  .serve(
    {
      servedir: buildDirectory,
      port: 3000,
    },
    defaultSettings
  )
  .then((server) => {
    console.log(`Serving at http://localhost:${server.port}`);
  });
