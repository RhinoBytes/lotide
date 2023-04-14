// function that returns middle of array
const middle = function(array) {
  // set empty array to newArray
  const newArray = [];
  //if array is less then 3, output nothing
  if (array.length < 3) {
    return newArray;
    // if array is even return the middle two numbers
  } else if (array.length % 2 === 0) {
    const midIndex1 = array.length / 2 - 1;
    const midIndex2 = array.length / 2;
    newArray.push(array[midIndex1], array[midIndex2]);
    // if array is not even, return the middle number in the array
  } else {
    const midIndex = Math.floor(array.length / 2);
    newArray.push(array[midIndex]);
  }
  return newArray;
};
module.exports = middle;