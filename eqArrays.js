// Function Implementation

const assertEqual = function(actual, expected) {
  //if true print green check marks
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  // if false print red stop symbols
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

// function that checks if two arrays are the same
let eqArrays = function(first, second) {
  // returns false if arrays are different lengths
  if (first.length !== second.length) {
    return false;
  }
  // loops through array and returns false if values are not the same
  for (let i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      return false;
    }
  }
  return true;
 
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 5], [1, 2, 3]), false);