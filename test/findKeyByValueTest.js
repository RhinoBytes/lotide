let findKeyByValue = require('../findKeyByValue');
let assert = require('chai').assert;

describe('findKeyByValue', () => {
  it('should return the correct key for a given value in an object', () => {
    const input = { a: 1, b: 2, c: 3, d: 4 };
    const value = 3;
    const expectedOutput = 'c';
    assert.strictEqual(findKeyByValue(input, value), expectedOutput);
  });

  it('should return undefined for a value not found in the object', () => {
    const input = { a: 1, b: 2, c: 3, d: 4 };
    const value = 5;
    const expectedOutput = undefined;
    assert.strictEqual(findKeyByValue(input, value), expectedOutput);
  });

  it('should return the first key that matches the value', () => {
    const input = { a: 1, b: 2, c: 2, d: 3 };
    const value = 2;
    const expectedOutput = 'b';
    assert.strictEqual(findKeyByValue(input, value), expectedOutput);
  });
});
