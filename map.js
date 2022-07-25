const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {

  console.log("array: ", array);
  console.log("callback: ", callback)

  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};


const assertArraysEqual = function(array1, array2) {

  if (array1.length !== array2.length) {
    return `🚨🚨🚨 Assertion Failed: ${array1} !== ${array2}`;
  }
    
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return `🚨🚨🚨 Assertion Failed: ${array1} !== ${array2}`;
      }
    }
  return `✅✅✅ Assertion Passed: ${array1} === ${array2}`;
};

// TESTING
console.log(assertArraysEqual(map(words, word => word[0]), ["g", "c", "t", "m", "t"]));
console.log(assertArraysEqual(map(words, word => word.length), [6, 7, 2, 5, 3]));
console.log(assertArraysEqual(map(words, word => word + "butt"), ["groundbutt", "controlbutt", "tobutt", "majorbutt", "tombutt"]));