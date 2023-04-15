// function that takes in two arrays and outputs to a new array any items that are not present im both 
let without = function(source, itemsToRemove) {
  if(!Array.isArray(source) || !Array.isArray(itemsToRemove)) {
    return undefined;
  }
  return source.filter(element => !itemsToRemove.includes(element));
};

module.exports = without;