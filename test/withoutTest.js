const without = require("../without");
const assert = require('chai').assert;


describe("#without", () => {
  it("returns [1] for [1, 2, 3] and [2, 3]", () => {
    assert.deepEqual(without([1, 2, 3], [2, 3]), [1]);
  });
  it("returns [] for [] and []", () => {
    assert.deepEqual(without([], []), []);
  });
  it("returns undefined for 2, [2]", () => {
    assert.deepEqual(without(2, [2]), undefined);
  });
  it("returns undefined for 42", () => {
    assert.deepEqual(without(42), undefined);
  });
});
