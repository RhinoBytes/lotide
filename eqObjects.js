let eqArrays = function(first, second) {
  if (first.length !== second.length) {
    return false;
  }
  for (let i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      return false;
    }
  }
  return true;
  //first.toString() === second.toString();
};

// Function Implementation

const assertEqual = function(actual, expected) {
  //if true print green check marks
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  // if false print red stop symbols
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};



// function that compares two objects and returns boolian value 
const eqObjects = function(object1, object2) {
  // assign the keys of each function to a variable
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  // if key length doesn't match, return false
  if (keys1.length !== keys2.length) {
    return false;
  }
  // loop through keys1 
  for (const key of keys1) {
    const val1 = object1[key];
    const val2 = object2[key];
    // return false if val1 and val2 are not arrays
    if (Array.isArray(val1) && Array.isArray(val2)) {
      if (!eqArrays(val1, val2)) {
        return false;
      }
      // return false if val1 and val2 are not objects
    } else if (typeof val1 === 'object' && typeof val2 === 'object') {
      if (!eqObjects(val1, val2)) {
        return false;
      }
      // return false if val1 and val2 are not ===
    } else if (val1 !== val2) {
      return false;
    }
  }

  return true;
};





const shirtObject = {color:"red", size: "medium"};
const anotherShirtObjects = {size: "medium", color: "red"};
eqObjects(shirtObject, anotherShirtObjects);

const longSleeveShirtObject = {size: "medium", color: "red", sleeveLength: "long"};
eqObjects(shirtObject, longSleeveShirtObject);

assertEqual(eqObjects(shirtObject, anotherShirtObjects), true);
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false);

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject);


const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject); // => false

assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true);
assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false);