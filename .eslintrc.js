module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: { sourceType: 'module' },
  settings: { react: 'detect' },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'prettier/react',
    'prettier/@typescript-eslint',
  ],
  env: { es6: true, node: true, browser: false },
  plugins: ['@typescript-eslint', 'jest', 'react', 'prettier'],
  rules: {
    'react/jsx-boolean-value': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    'prettier/prettier': 'warn',
  },
  overrides: [
    {
      files: ['src/**/*'],
      env: { node: false, browser: true },
    },
    {
      files: ['*.test.*'],
      env: { 'jest/globals': true },
    },
  ],
}