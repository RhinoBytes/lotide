// function that checks if two arrays are the same
let eqArrays = function(first, second) {
  // returns false if arrays are different lengths
  if (first.length !== second.length) {
    return false;
  }
  // loops through array and returns false if values are not the same
  for (let i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      return false;
    }
  }
  return true;

};

module.exports = eqArrays;