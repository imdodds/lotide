const assertEqual = require('./assertEqual.js');
const head = require('./head.js');
const tail = require('./tail.js');
const eqArrays = require('./eqArrays.js');
const assertArraysEqual = require('./assertArraysEqual.js');
const without = require('./without.js');
const flatten = require('./flatten.js');
const middle = require('./middle.js');
const countOnly = require('./countOnly.js');
const countLetters = require('./countLetters.js');
const letterPositions = require('./letterPositions.js');
const findKeyByValue = require('./findKeyByValue.js');
const eqObjects = require('./eqObjects.js');
const assertObjectsEqual = require('./assertObjectsEqual.js');
const map = require('./map.js');
const takeUntil = require('./takeUntil.js');
const findKey = require('./findKey.js');

module.exports = {
  assertEqual: assertEqual,
  head: head,
  tail: tail,
  eqArrays: eqArrays,
  assertArraysEqual: assertArraysEqual,
  without: without,
  flatten: flatten,
  middle: middle,
  countOnly: countOnly,
  countLetters: countLetters,
  letterPositions: letterPositions,
  findKeyByValue: findKeyByValue,
  eqObjects: eqObjects,
  assertObjectsEqual: assertObjectsEqual,
  map: map,
  takeUntil: takeUntil,
  findKey: findKey
};