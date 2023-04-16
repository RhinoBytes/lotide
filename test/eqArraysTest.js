const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

describe('eqArrays', () => {
  it('should return true for two empty arrays', () => {
    const first = [];
    const second = [];
    const result = eqArrays(first, second);
    assert.isTrue(result);
  });

  it('should return true for two identical arrays', () => {
    const first = [1, 2, 3];
    const second = [1, 2, 3];
    const result = eqArrays(first, second);
    assert.isTrue(result);
  });

  it('should return false for two arrays of different lengths', () => {
    const first = [1, 2, 3];
    const second = [1, 2];
    const result = eqArrays(first, second);
    assert.isFalse(result);
  });

  it('should return false for two arrays with different value types', () => {
    const first = [1, 2, 3];
    const second = ['1', '2', '3'];
    const result = eqArrays(first, second);
    assert.isFalse(result);
  });
});