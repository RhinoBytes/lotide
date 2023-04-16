// head function that takes string as a arrgument
let head = function(arr) {
  //checks if string is empty
  if (!Array.isArray(arr)) {
    return undefined;
  }
  if (arr.length === 0) {
    return undefined;
    // if not empty, returns first item in array
  } else {
    return arr[0];
  }
};

module.exports = head; 