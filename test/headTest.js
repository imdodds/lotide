const assertEqual = require('../assertEqual');
const head = require('../head.js');

//TESTING
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([23]), 23);
assertEqual(head([]), undefined);