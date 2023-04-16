let findKey = require('../findkey');
let assert = require('chai').assert;

describe('findKey', () => {
  it('should return the correct key for a given value that matches the callback condition', () => {
    const input = {
      key1: 10,
      key2: 20,
      key3: 30,
      key4: 40
    };
    const callback = (value) => value === 30;
    const expectedOutput = 'key3';
    assert.strictEqual(findKey(input, callback), expectedOutput);
  });

  it('should return undefined if no key matches the callback condition', () => {
    const input = {
      key1: 'one',
      key2: 'two',
      key3: 'three'
    };
    const callback = (value) => value === 'four';
    const expectedOutput = undefined;
    assert.strictEqual(findKey(input, callback), expectedOutput);
  });
});
