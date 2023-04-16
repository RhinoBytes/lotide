const letterPositions = require("../letterPositions");
const assert = require('chai').assert;

describe('letterPositions', () => {
  it('should return an object with indices of each character excluding spaces', () => {
    const input = 'hello world';
    const expectedOutput = {
      'h': [0],
      'e': [1],
      'l': [2, 3, 9],
      'o': [4, 7],
      'w': [6],
      'r': [8],
      'd': [10]
    };
    assert.deepEqual(letterPositions(input), expectedOutput);
  });

  it('should return an empty object for an empty string input', () => {
    const input = '';
    const expectedOutput = {};
    assert.deepEqual(letterPositions(input), expectedOutput);
  });

  it('should return an empty object for a string with only spaces', () => {
    const input = '   ';
    const expectedOutput = {};
    assert.deepEqual(letterPositions(input), expectedOutput);
  });
});