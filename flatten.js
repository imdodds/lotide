const flatten = (arr) => {
  return arr.flat();
};

const assertArraysEqual = function(array1, array2) {

  let matches = [];

  if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] === array2[i]) {
        matches.push(array1[i]);
      }
    }
  }

  if (array1.length === matches.length) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🚨🚨🚨 Assertion Failed: ${array1} !== ${array2}`);
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

// TESTING
flatten([1, 2, [3, 4], 5, [6]]) // => [1, 2, 3, 4, 5, 6]
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6])