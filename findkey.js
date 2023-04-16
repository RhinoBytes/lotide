// function that finds the first key that matches a certain criteria  
const findKey = function(object, callback) {
  let finalValue = undefined;
  let objectKEys =Object.keys(object);
  for (const key in object) {
    if(callback(object[key])) {
      finalValue = key;
      break;
    }
  }
  return finalValue;
};

module.exports = findKey;