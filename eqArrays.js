const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚨🚨🚨 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(array1, array2) {

  let matches = [];

  if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] === array2[i]) {
        matches.push(array1[i]);
      }
    }
  }

  if (array1.length === matches.length) {
    return true;
  } else {
    return false;
  }
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);