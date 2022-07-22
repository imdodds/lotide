const assertObjectsEqual = function(object1, object2) {
  
  const inspect = require('util').inspect;

  const obj1Keys = Object.keys(object1);
  const obj2Keys = Object.keys(object2);
  
  if (obj1Keys.length !== obj2Keys.length) {
    // return false;
    return `🚨🚨🚨 Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`;
  }
    
  for (const key of obj1Keys) {

    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        // return false
        return `🚨🚨🚨 Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`;
      }
    } else if (object1[key] !== object2[key]) {
      // return false;
      return `🚨🚨🚨 Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`;
    }
  }
  // return true;
  return `✅✅✅ Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`;

};

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
    
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};


// TESTING
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(assertObjectsEqual(ab, ba)); // true

const abc = { a: "1", b: "2", c: "3" };
console.log(assertObjectsEqual(ab, abc)); // false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(assertObjectsEqual(cd, dc)); // true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(assertObjectsEqual(cd, cd2)); // false