let flatten = require('../flatten');
let assert = require('chai').assert;

describe('flatten', () => {
  it('should flatten an array of arrays into a singular array', () => {
    const input = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    const expectedOutput = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    assert.deepEqual(flatten(input), expectedOutput);
  });

  it('should return an empty array for an empty input array', () => {
    const input = [];
    const expectedOutput = [];
    assert.deepEqual(flatten(input), expectedOutput);
  });

  it('should return undefined for an input that is not an array', () => {
    const input = 'not an array';
    const expectedOutput = undefined;
    assert.strictEqual(flatten(input), expectedOutput);
  });
});
