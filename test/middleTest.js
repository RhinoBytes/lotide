const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("returns ['3'] for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });it("returns [8, 14] for [3, 7 ,8, 14, 11, 15]", () => {
    assert.deepEqual(middle([3, 7 ,8, 14, 11, 15]), [8, 14]);
  });
});