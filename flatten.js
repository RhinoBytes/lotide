// function that returns a given array of arrays as a singular array
let flatten = function(arrays) {
  if (!Array.isArray(arrays)) {
    return undefined; 
  }
  let newArray = [];
  for (let i = 0; i < arrays.length; i++) {
    if (Array.isArray(arrays[i])) {
      newArray = newArray.concat(flatten(arrays[i]));
    } else {
      newArray.push(arrays[i]);
    }
  }
  return newArray;
};


module.exports = flatten;