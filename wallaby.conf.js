module.exports = () => ({
  files: ['app/src/**/*.js', 'shared/src/**/*.js'],
  tests: ['app/tests/**/*.test.js'],
  env: {
    type: 'node',
    runner: 'node',
  },
  testFramework: 'ava',
});
