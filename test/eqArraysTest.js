const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays.js');

//TESTING
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([3, 2, 1], [2, 2]), false);
assertEqual(eqArrays([61, 17, "fart", false], [61, 17, "fart", false]), true);
assertEqual(eqArrays([5, 6, 7, 8], [8, 7, 6, 5]), false);