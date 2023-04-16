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
// add a way to convert the string to undercase eltters 
// add test for letter that doesn't appear in object 
module.exports = countLetters;
