let flatten = require('../flatten');
let assert = require('chai').assert;

describe("#flatten", () => {
  it("returns [1, 2, 3, 4, 5, 6] for [1, 2, [3, 4], 5, [6]", () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });
  it("returns [] for []", () => {
    assert.deepEqual(flatten([]), []); 
  });
  it("returns ['hi', 2] for ['hi', [2]", () => {
    assert.deepEqual(flatten(["hi", [2]]), ["hi", 2]); 
  });
  it("returns undefined for 42", () => {
    assert.deepEqual(flatten(42), undefined); 
  });
});

