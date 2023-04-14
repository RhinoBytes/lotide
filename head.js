const assertEqual = require(`./assertEqual`);

// head function that takes string as a arrgument
let head = function(string) {
  //checks if string is empty
  if (string.length === 0) {
    return undefined;
    // if not empty, returns first item in array
  } else {
    return string[0];
  }
};

