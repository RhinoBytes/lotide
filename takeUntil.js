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


// function that pushes each item of an array that !callback 
const takeUntil = function(array, callback) {
  const newArray = [];
  for (let value of array) {
    if (callback(value)) {
      break;
    } else {
      newArray.push(value);
    }
  }
  return newArray;
};


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
const results3 = ["I've", "been", "to", "Hollywood"];
console.log(results2);

assertArraysEqual(eqArrays(results2, results3), true);


module.exports = takeUntil;