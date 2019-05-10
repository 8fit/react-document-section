import babel from 'rollup-plugin-babel'

import pkg from './package.json'

export default {
  input: 'src/index.tsx',
  external: Object.keys(pkg.peerDependencies),
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true,
    },
  ],
  plugins: [
    babel({
      extensions: ['.js', '.ts', '.tsx'],
      exclude: 'node_modules/**',
    }),
  ],
}
