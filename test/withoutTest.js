const assert = require('chai').assert;
const without = require('../without.js');

describe("#without", () => {
  it("returns [2, 3] for ([1, 2, 3], [1])", () => {
    assert.deepEqual(without([1, 2, 3], [1]), [2, 3]);
  });
  it("returns ['1', '2'] for (['1', '2', '3'], [1, 2, '3'])", () => {
    assert.deepEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
  });
  it("returns ")
});