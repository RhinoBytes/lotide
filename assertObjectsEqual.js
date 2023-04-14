const eqArrays = require("./eqArrays");
// function that compares two objects and returns boolian value
const eqObjects = function(object1, object2) {
  // assign the keys of each function to a variable
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  // if key length doesn't match, return false
  if (keys1.length !== keys2.length) {
    return false;
  }
  // loop through keys1
  for (const key of keys1) {
    const val1 = object1[key];
    const val2 = object2[key];
    // return false if val1 and val2 are not arrays
    if (Array.isArray(val1) && Array.isArray(val2)) {
      if (!eqArrays(val1, val2)) {
        return false;
      }
      // return false if val1 and val2 are not objects
    } else if (typeof val1 === 'object' && typeof val2 === 'object') {
      if (!eqObjects(val1, val2)) {
        return false;
      }
      // return false if val1 and val2 are not ===
    } else if (val1 !== val2) {
      return false;
    }
  }

  return true;
};

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