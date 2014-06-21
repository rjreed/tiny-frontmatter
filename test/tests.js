var assert = require('assert');


module.exports = function(data, good) {
  assert.ok(data instanceof Object, 'Didn\'t return an object');
  assert.deepEqual(Object.keys(data), Object.keys(good), 
    'Object.keys\nActual:\n' + Object.keys(data) + '\nExpected:\n' + Object.keys(good));
  assert.strictEqual(good.body, data.body, 
    'Body Parsing\nActual:\n' + data.body + '\nExpected:\n' + good.body);
  assert.deepEqual(good.attributes, data.attributes, 
    'Attributes Parsing\nActual:\n' + data.attributes + '\nExpected:\n' + good.attributes);
};
