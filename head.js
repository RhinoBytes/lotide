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
// only used to test if its working

// head function that takes string as a arrgument
let head = function(string) {
  //checks if string is empty
  if (string.length === 0) {
    return undefined;
    // if not empty, returns first item in array
  } else {
    return string[0];
  }
}

// used to test if function is working properly
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");