module.exports = {
  verbose: true,
  testRegex: '^.+\\.test\\.[jt]sx?$',
  transform: {
    '^.+\\.[jt]sx?$': '<rootDir>/node_modules/babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageReporters: ['lcov'],
  collectCoverageFrom: ['src/**/*.(ts|tsx|js)', '!src/**/*.d.ts'],
}
