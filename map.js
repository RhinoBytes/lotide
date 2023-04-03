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


const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word[0]);
const results2 = map(words, word => word.length);
console.log(results1);

assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);
assertArraysEqual(results2, [6, 7, 2, 5, 3]);
assertArraysEqual(eqArrays(results1, results2), false);

