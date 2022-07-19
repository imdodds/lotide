const letterPositions = function(sentence) {
  
  let results = {};

  for (let i = 0; i < sentence.length; i++) {

    if (sentence[i] !== " ") {

      let letter = sentence[i];

      if (!results[letter]) {
        results[letter] = [];
      };
      results[letter].push(i);
    }; 
  };
  return results;
};


console.log(letterPositions("hello"));


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