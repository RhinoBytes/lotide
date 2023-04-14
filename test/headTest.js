const assertEqual = require('../assertEqual');
const head = require('../head');
// used to test if function is working properly
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");