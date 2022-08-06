const middle = (arr) => {

  let mid = []

  if (arr.length < 3) {
    return mid;
  } else if (arr.length % 2 !== 0) {
    mid.push(arr[Math.floor(arr.length / 2)]);
  } else if (arr.length % 2 === 0) {
    mid.push(arr[(arr.length / 2) - 1]);
    mid.push(arr[(arr.length / 2)]);
  } return mid;
};

module.exports = middle;