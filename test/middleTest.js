const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');
// test code

const actual1 = middle([1, 2, 3, 4, 5]);
const expected1 = [3];
assertArraysEqual(actual1, expected1);


const actual2 = middle([3, 7 ,8, 14, 11, 15])
const expected2 = [8, 14];
assertArraysEqual(actual2, expected2);