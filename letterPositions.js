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

module.exports = letterPositions;