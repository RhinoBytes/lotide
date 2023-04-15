const assertEqual = function(actual, expected) {
  //if true print green check marks
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  // if false print red stop symbols
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

// function that return the first key that matches the value
const findKeyByValue = function(object, value) {
  let finalValue = undefined;
  let objectKeys = Object.keys(object);
  for (const key in object) {
   if (object[key] === value) {
      finalValue = key;
      break;
    } 
    }
    
    return finalValue;
};
console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));



assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");


module.exports = findKeyByValue;