const countLetters = require("../countLetters")
const assert = require('chai').assert;

describe("#countLetters", () => {
  it("returns letter counts for 'lighthouse'", () => {
    assert.deepEqual(countLetters("lighthouse"), { l: 1, i: 1, g: 1, h: 2, t: 1, o: 1, u: 1, s: 1, e: 1 }); 
  });
  it("returns letter counts for 'lab'", () => {
    assert.deepEqual(countLetters("lab"), { l: 1, a: 1, b: 1 }); 
  });
  it("returns an empty object for an empty string", () => {
    assert.deepEqual(countLetters(""), {}); 
  });

  it("treats small and big letters as distinct characters", () => {
    assert.deepEqual(countLetters("aAaA"), { a: 2, A: 2 }); 
  });
});


// add a empty string test 
// add test for small and big letters 