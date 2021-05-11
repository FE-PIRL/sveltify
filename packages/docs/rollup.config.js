import alias from '@rollup/plugin-alias';
import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import commonjs from '@rollup/plugin-commonjs';
import svelte from 'rollup-plugin-svelte';
import babel from '@rollup/plugin-babel';
import dynamic from '@rollup/plugin-dynamic-import-vars';
import { terser } from 'rollup-plugin-terser';
import config from 'sapper/config/rollup';
import preprocess from './scripts/preprocess';
import examples from './scripts/examples';
import worker from './scripts/worker';
import pkg from './package.json';

const path = require('path');

const mode = process.env.NODE_ENV;
const dev = mode === 'development';
const legacy = !!process.env.SAPPER_LEGACY_BUILD;

// eslint-disable-next-line no-shadow
const onwarn = (warning, onwarn) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  (warning.code === 'MISSING_EXPORT' && /'preload'/.test(warning.message)) ||
  (warning.code === 'CIRCULAR_DEPENDENCY' && /[/\\]@sapper[/\\]/.test(warning.message)) ||
  onwarn(warning);
const extensions = ['.svelte', '.md'];

export default {
  client: {
    input: config.client.input(),
    output: config.client.output(),
    plugins: [
      alias({
        entries: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
      }),
      replace({
        'process.browser': true,
        'process.env.NODE_ENV': JSON.stringify(mode),
        CURRENT_DATE: new Date().toISOString().substring(0, 10),
      }),
      examples,
      svelte({
        emitCss: true,
        compilerOptions: {
          dev,
          hydratable: true,
        },
        extensions,
        preprocess,
      }),
      resolve({
        browser: true,
        dedupe: ['svelte'],
      }),
      commonjs(),
      dynamic({
        include: '**/*.svelte',
      }),
      worker,

      legacy &&
        babel({
          extensions: ['.js', '.mjs', '.html', '.svelte'],
          babelHelpers: 'runtime',
          exclude: ['node_modules/@babel/**'],
          presets: [
            [
              '@babel/preset-env',
              {
                targets: '> 0.25%, not dead',
              },
            ],
          ],
          plugins: [
            '@babel/plugin-syntax-dynamic-import',
            [
              '@babel/plugin-transform-runtime',
              {
                useESModules: true,
              },
            ],
          ],
        }),

      !dev &&
        terser({
          module: true,
        }),
    ],

    preserveEntrySignatures: false,
    onwarn,
  },

  server: {
    input: config.server.input(),
    output: config.server.output(),
    plugins: [
      alias({
        entries: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
      }),
      replace({
        'process.browser': false,
        'process.env.NODE_ENV': JSON.stringify(mode),
        CURRENT_DATE: new Date().toISOString().substring(0, 10),
      }),
      examples,
      svelte({
        compilerOptions: {
          generate: 'ssr',
          hydratable: true,
          dev,
        },
        extensions,
        preprocess,
      }),
      resolve({
        dedupe: ['svelte'],
      }),
      commonjs(),
      dynamic({
        include: '**/*.svelte',
      }),
      worker,
    ],
    external: Object.keys(pkg.dependencies).concat(require('module').builtinModules),
    preserveEntrySignatures: 'strict',
    onwarn,
  },

  serviceworker: {
    input: config.serviceworker.input(),
    output: config.serviceworker.output(),
    plugins: [
      resolve(),
      replace({
        'process.browser': true,
      }),
      commonjs(),
      !dev && terser(),
    ],

    preserveEntrySignatures: false,
    onwarn,
  },
};
