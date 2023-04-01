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

// functions that adds up number of letters used and stores the results in the results object
const countLetters = function(string) {
  // remove spaces from string and joins the strings together
  string = string.split(' ').join('');
  // creates an empty results object to store answer
  let results = {};
  // loops through the string to count every letter and add the total to the results object
  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    
    if (results[char]) {
      results[char] += 1;
    } else {
      results[char] = 1;
    }
  }
  
  return results;
};


// tests if functions is working using the assertEqual function
const result2 = countLetters('lighthouse labs');
assertEqual(result2["l"], 2);
assertEqual(result2["i"], 1);
assertEqual(result2["g"], 1);
assertEqual(result2["h"], 2);
assertEqual(result2["o"], 1);
assertEqual(result2["u"], 1);
assertEqual(result2["s"], 2);
assertEqual(result2["e"], 1);
assertEqual(result2["a"], 1);
assertEqual(result2["b"], 1);




