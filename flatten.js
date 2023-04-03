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
// function that returns a given array of arrays as a singular array
let flatten = function(arrays) {
  let newArray = [];
  for (let i = 0; i < arrays.length; i++) {
    if (Array.isArray(arrays[i])) {
      newArray = newArray.concat(flatten(arrays[i]));
    } else {
      newArray.push(arrays[i]);
    }
  }
  return newArray;
};

console.log(flatten([1, 2, [3, 4], 5, [6]]));