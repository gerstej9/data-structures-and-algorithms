'use strict';

const binarySearch = require('../array-binary-search.js');


//Happy Path
describe('testing the binary search module', () => {
  it('should return an index of the target value within the original array', () => {
    const targetValueIndex = binarySearch([4,8,15,16,23,42], 15);

    expect(targetValueIndex).toEqual(2);
  });
});

//Expect Failure
describe('testing the binary search module', () => {
  it('should return a -1 value when target value is not present in original array', () => {
    const targetValueIndex = binarySearch([4,8,15,16,23,42], 45);

    expect(targetValueIndex).toEqual(-1);
  });
});

