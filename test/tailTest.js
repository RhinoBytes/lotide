const assert = require('chai').assert;
const tail = require('../tail');


describe("#tail", () => {
  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });
  it("returns ['1', '2'] for ['0', '1', '2']", () => {
    assert.deepEqual(tail(["0", "1", "2"]), ["1", "2"]);
  });
});