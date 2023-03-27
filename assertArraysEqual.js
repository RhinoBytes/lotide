// function that comparest two arrays by converting them to strings
let eqArrays = function(first, second) {
  return first.toString() === second.toString();
};

// function that logs to console if the two compared arrays are equal
let assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};
/*
assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertArraysEqual(eqArrays([1, 2, 5], [1, 2, 3]), true);
*/