'use strict';

const multiBracketValidation = require('../multi-bracket-validation.js');


describe('Testing multi-bracket validation function', () => {
  it('Should return true', () => {
    let boolean = multiBracketValidation('{}');
    expect(boolean).toBeTruthy();
  });
  it('Should return true', () => {
    let boolean = multiBracketValidation('{}(){}');
    expect(boolean).toBeTruthy();
  });
  it('Should return true', () => {
    let boolean = multiBracketValidation('()[[Extra Characters]]');
    expect(boolean).toBeTruthy();
  });
  it('Should return true', () => {
    let boolean = multiBracketValidation('(){}[[]]');
    expect(boolean).toBeTruthy();
  });
  it('Should return true', () => {
    let boolean = multiBracketValidation('{}{Code}[Fellows](())');
    expect(boolean).toBeTruthy();
  });
  it('Should return false', () => {
    let boolean = multiBracketValidation('[({}]');
    expect(boolean).toBeFalsy();
  });
  it('Should return false', () => {
    let boolean = multiBracketValidation('(](');
    expect(boolean).toBeFalsy();
  });
  it('Should return false', () => {
    let boolean = multiBracketValidation('{(})');
    expect(boolean).toBeFalsy();
  });
});

