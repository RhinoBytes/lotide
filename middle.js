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


// function that returns middle of array
const middle = function(array) {
  // set empty array to newArray
  const newArray = [];
  //if array is less then 3, output nothing
  if (array.length < 3) {
    return newArray;
    // if array is even return the middle two numbers
  } else if (array.length % 2 === 0) {
    const midIndex1 = array.length / 2 - 1;
    const midIndex2 = array.length / 2;
    newArray.push(array[midIndex1], array[midIndex2]);
    // if array is not even, return the middle number in the array
  } else {
    const midIndex = Math.floor(array.length / 2);
    newArray.push(array[midIndex]);
  }
  return newArray;
};

// test code

const actual1 = middle([1, 2, 3, 4, 5]);
const expected1 = [3];
assertArraysEqual(actual1, expected1);


const actual2 = middle([3, 7 ,8, 14, 11, 15])
const expected2 = [8, 11];
assertArraysEqual(actual1, expected1);