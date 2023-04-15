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

// function that finds the first key that matches a certain criteria  
const findKey = function(object, callback) {
  let findValue = undefined;
  let objectKEys =Object.keys(object);
  for (const key in object) {
    if(callback(object[key])) {
      finalValue = key;
      break;
    }
  }
  return finalValue;
};

// testing the findkey function
let result1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"

// asserting that the result of the findkey function matches the expected value
assertEqual(result1, "noma");

module.exports = findKey;