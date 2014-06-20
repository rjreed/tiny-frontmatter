var assert = require('assert');
var good = {
  attributes: {
    title: 'Facebook for Pugs',
    date: 'June 18, 2014',
    tags: ['facebook', 'pugs', 'cashmoney']
  },
  body: '# TODO: strategery'
};

module.exports = function(data) {
  assert.ok(data instanceof Object, 'Didn\'t return an object');
  assert.deepEqual(Object.keys(data), Object.keys(good), 'Object  keys are incorrect');
  assert.strictEqual(good.body, data.body, 'Body parsed incorrectly');
  assert.deepEqual(good.attributes, data.attributes, 'Attributes parsed incorrectly');
  console.log('All tests passed!');
};
