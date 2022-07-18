const countLetters = (sentence) => {

  result = {};

  for (const letter of sentence) {
    if (letter === " ") {
      result = result;
      } else if (result[letter]) {
        result[letter] += 1;
      } else {
        result[letter] = 1;
    };
  };
  return result;
};

const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚨🚨🚨 Assertion Failed: ${actual} !== ${expected}`);
  }
};