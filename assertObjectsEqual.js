const eqArrays = require("./eqArrays");
const eqObjects = require("./eqObjects");

// function to determine if two objects equal
const assertObjectsEqual = function(actual, expected) {
  // use the inspect function to convert from object to a string
  const inspect = require('util').inspect;
  // tests if objects are equal and pritns result to console
  const isEqual = eqObjects(actual, expected);
  if (isEqual) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

//assertObjectsEqual({a: '1', b: '2'}, {a: '1', b: '2'});

module.exports = assertObjectsEqual;