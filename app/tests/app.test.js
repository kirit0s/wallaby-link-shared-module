const test = require('ava');
const app = require('../src/app');

test('return string', t => {
  const result = app('string');
  t.is(result, 'string');
});
