const assertArraysEqual = require('../assertArraysEqual');
const eqArrays = require('../eqArrays');

assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertArraysEqual(eqArrays([1, 2, 5], [1, 2, 3]), false);