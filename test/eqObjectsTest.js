const assert = require('chai').assert;
const eqObjects = require('../eqObjects');


describe("eqObjects", () => {
  it("should return true for two equal objects", () => {
    const obj1 = { a: 1, b: 2, c: { d: 3 } };
    const obj2 = { a: 1, b: 2, c: { d: 3 } };
    assert.isTrue(eqObjects(obj1, obj2));
  });

  it("should return false for two unequal objects", () => {
    const obj1 = { a: 1, b: 2, c: { d: 3 } };
    const obj2 = { a: 1, b: 2, c: { d: 4 } };
    assert.isFalse(eqObjects(obj1, obj2));
  });
});