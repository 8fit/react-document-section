module.exports = ({ env }) => ({
  presets: [
    ['@babel/env', { modules: env('test') ? 'commonjs' : false }],
    '@babel/react',
    '@babel/typescript',
  ],
})
