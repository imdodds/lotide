const tail = function(arr) {
  return arr.slice(1);
};

const assertEqualArray = function(array1, array2) {

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

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqualArray(result, ["Lighthouse", "Labs"]);