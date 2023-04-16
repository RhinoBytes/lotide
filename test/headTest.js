const head = require("../head");
const assert = require('chai').assert;


describe('head', () => {
  it('should return the first item in the array', () => {
    const input = [1, 2, 3, 4, 5];
    const expectedOutput = 1;
    assert.strictEqual(head(input), expectedOutput);
  });

  it('should return undefined for an empty array input', () => {
    const input = [];
    const expectedOutput = undefined;
    assert.strictEqual(head(input), expectedOutput);
  });

  it('should return undefined for an input that is not an array', () => {
    const input = 'not an array';
    const expectedOutput = undefined;
    assert.strictEqual(head(input), expectedOutput);
  });
});