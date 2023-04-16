const countOnly = require("../countOnly")
const assert = require('chai').assert;

describe('countOnly', () => {
  // Test case 1: Check if countOnly returns correct counts for given items
  it('should return correct counts for given items', () => {
    const allItems = ['a', 'b', 'c', 'a', 'b', 'c', 'd', 'a'];
    const itemsToCount = { 'a': true, 'b': true, 'c': true };
    const expectedCounts = { 'a': 3, 'b': 2, 'c': 2 };
    const actualCounts = countOnly(allItems, itemsToCount);
    assert.deepEqual(actualCounts, expectedCounts);
  });

  // Test case 2: Check if countOnly returns an empty object for empty input arrays
  it('should return an empty object for empty input arrays', () => {
    const allItems = [];
    const itemsToCount = { 'a': true, 'b': true, 'c': true };
    const expectedCounts = {};
    const actualCounts = countOnly(allItems, itemsToCount);
    assert.deepEqual(actualCounts, expectedCounts);
  });
});