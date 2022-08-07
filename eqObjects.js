const eqArrays = require('./eqArrays.js');

const eqObjects = function(object1, object2) {

  const obj1Keys = Object.keys(object1);
  const obj2Keys = Object.keys(object2);
  
  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  }
    
  for (const key of obj1Keys) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      return eqArrays(object1[key], object2[key]);
      } else if (object1[key] !== object2[key]) {
         return false;
    }
  }
  return true;
};

module.exports = eqObjects;