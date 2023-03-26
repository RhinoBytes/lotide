// function that comparest two arrays by converting them to strings
let eqArrays = function(first, second) {
  return first.toString() === second.toString();
}

// function that logs to console if the two compared arrays are equal
let assertArrayEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};
/*
assertArrayEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertArrayEqual(eqArrays([1, 2, 5], [1, 2, 3]), true);
*/