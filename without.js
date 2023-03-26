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
assertArrayEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertArrayEqual(eqArrays([1, 2, 5], [1, 2, 3]), true);
*/


// function that takes in two arrays and outputs to a new array any items that are not present im both 
let without = function(source, itemsToRemove) {
  source.filter(element => !itemsToRemove.includes(element));
}


/*
without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
*/