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


let eqArrays = function(first, second) {
  return first.toString() === second.toString();
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 5], [1, 2, 3]), true);