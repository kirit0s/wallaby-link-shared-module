module.exports = () => ({
  files: ['app/src/**/*.js', 'shared/src/**/*.js', '!node_modules/shared/**'],
  tests: ['app/tests/**/*.test.js'],
  env: {
    type: 'node',
    runner: 'node',
  },
  testFramework: 'ava',
  setup: function(wallaby) {
    var path = require('path');
    const moduleAlias = require('module-alias')

    moduleAlias.addAlias('shared', path.join(wallaby.projectCacheDir, 'shared/src/app.js'));
  }
});
