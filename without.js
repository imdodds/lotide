const without = (source, itemsToRemove) => {
  return source.filter(element => !itemsToRemove.includes(element))
};

module.exports = without;