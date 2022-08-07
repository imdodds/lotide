const eqArrays = require('./eqArrays.js');

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

module.exports = assertObjectsEqual;