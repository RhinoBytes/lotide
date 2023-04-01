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



//this function takes a string as input and returns an object that
//contains the indices of each character in the string, excluding spaces
const letterPositions = function(sentence) {
  // creat an empty array to store result
  const results = {};
  // loop over the characters in the string
  for (let i = 0; i < sentence.length; i++) {
    // ignore spaces and only consider non-space characters
    if (sentence[i] !== " ") {
      //get the current chapter
      let char = sentence[i];
      //if the character already exists as a key in the results object, add
      // to the existing array the indices for the that character
      if (results[char]) {
        results[char].push(i);
        // if character doesn't exist as a key in results onject yet, create a
        // new key-value pair with the character as the key and and array containing the current indice.
      } else {
        results[char] = [i];
      }
    }

  }
  // return the results object containing the indices of each character
  return results;

};

/* 

assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").h, [0]);
assertArraysEqual(letterPositions("hello").l, [2, 3]);
assertArraysEqual(letterPositions("hello").o, [4]); */