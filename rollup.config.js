/* eslint-env node */
import { nodeResolve } from '@rollup/plugin-node-resolve';

const commonConfig = {
  input: 'src/index.js',
  plugins: [
    nodeResolve(),
  ],
};

export default [
  {
    output: {
      dir: './dist',
      format: 'cjs',
      entryFileNames: '[name].js',
      chunkFileNames: '[name].js',
    },
    ...commonConfig,
  },
  {
    output: {
      dir: './dist',
      format: 'esm',
      entryFileNames: '[name].mjs',
      chunkFileNames: '[name].mjs',
    },
    ...commonConfig,
  },
];
