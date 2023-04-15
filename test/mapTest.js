const map = require("../map");
const assert = require('chai').assert;


const words = ["ground", "control", "to", "major", "tom"];


describe("#map", () => {
  it("returns ['g', 'c', 't', 'm', 't'] for ['ground', 'control', 'to', 'major', 'tom']", () => {
    assert.deepEqual(map(words, word => word[0]), ['g', 'c', 't', 'm', 't']); // Provide the callback function to map
  });
  it("returns [6, 7, 2, 5, 3] for ['ground', 'control', 'to', 'major', 'tom']", () => {
    assert.deepEqual(map(words, word => word.length), [6, 7, 2, 5, 3]); // Provide the callback function to map
  });
});
