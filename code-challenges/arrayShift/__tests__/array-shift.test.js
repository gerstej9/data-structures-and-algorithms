'use strict';

const insertShiftArray = require('../array-shift.js');


//Happy Path
describe('testing the array-shift module', () => {
  it('should return an array with a value inserted at the middle index', () => {
    const insertedArray = insertShiftArray([2,4,6,8], 5);

    expect(insertedArray).toEqual([2,4,5,6,8]);
  });
});

//Expect Failure
describe('testing the array-shift module', () => {
  it('should not return an array with the value inserted at the end of the array', () => {
    const insertedArray = insertShiftArray([2,4,6,8], 5);

    expect(insertedArray) !== ([2,4,6,8,5]);
  });
});

//Edge case of odd number length array
describe('testing the array-shift module', () => {
  it('should return an array with the value inserted so that it becomes the middle index', () => {
    const insertedArray = insertShiftArray([2,4,6,8,9], 5);

    expect(insertedArray).toEqual([2,4,6,5,8,9]);
  });
});