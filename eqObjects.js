const eqArrays = require("./eqArrays");

// function that compares two objects and returns boolian value
const eqObjects = function(object1, object2) {

  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  // Check if number of keys in both objects are equal
  if (keys1.length !== keys2.length) {
    return false;
  }

  // Loop through keys of object1
  for (const key of keys1) {
    const val1 = object1[key];
    const val2 = object2[key];
    // Check if values are arrays and compare using eqArrays function
    if (Array.isArray(val1) && Array.isArray(val2)) {
      if (!eqArrays(val1, val2)) {
        return false;
      }
      // Check if values are objects and compare recursively using eqObjects function
    } else if (typeof val1 === 'object' && typeof val2 === 'object') {
      if (!eqObjects(val1, val2)) {
        return false;
      }
    // Compare primitive values using strict equality
    } else if (val1 !== val2) {
      return false;
    }
  }

  return true;
};

module.exports = eqObjects;

