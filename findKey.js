const findKey = (object, callback) => {

  const objEntries = Object.entries(object);

  for (let item of objEntries) {
    if (callback(item[1])) {
      return item[0];
    }
  }
};

module.exports = findKey;