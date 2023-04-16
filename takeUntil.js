// function that pushes each item of an array that !callback 
const takeUntil = function(array, callback) {
  const newArray = [];
  for (let value of array) {
    if (callback(value)) {
      break;
    } else {
      newArray.push(value);
    }
  }
  return newArray;
};

module.exports = takeUntil;