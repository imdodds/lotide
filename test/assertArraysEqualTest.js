const assertEqual = require('../assertEqual');
const assertArraysEqual = require('../assertArraysEqual.js');

//TESTING
console.log(assertArraysEqual([1, 2, 3, 4], [1, 2, 3, 4]));       // true
console.log(assertArraysEqual([2, 5, 6, 13, 7], [3, 6, 23, 8]));  // false