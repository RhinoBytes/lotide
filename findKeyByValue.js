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

module.exports = findKeyByValue; 