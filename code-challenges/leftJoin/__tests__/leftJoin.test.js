'use strict';

const leftJoin = require('../leftJoin.js');



describe('leftJoin functionality', () => {
  let hashOne;
  let hashTwo;
  beforeEach(() => {
    hashOne = [
      [{'fond': ['enamored']}],
      [{'wrath': ['anger']}],
      [{'diligent': ['employed']}],
      [{'outfit': ['garb']}],
      [{'guide': ['usher']}],
    ];
    hashTwo = [
      [{'fond': ['averse']}],
      [{'wrath': ['delight']}],
      [{'diligent': ['idel']}],
      [{'guide': ['follow']}],
      [{'flow': ['jam']}],
    ];
  });

  it('Should return a hash table', () => {
    let returnedTable = leftJoin(hashOne, hashTwo);
    expect(returnedTable).toBeTruthy();
  });
  it('Should keep the keys of the original hash table', () => {
    let returnedTable = leftJoin(hashOne, hashTwo);
    expect(Object.keys(returnedTable[0][0])[0]).toEqual('fond');
  });
  it('Should keep the values of the original hash table', () => {
    let returnedTable = leftJoin(hashOne, hashTwo);
    expect(returnedTable[0][0]['fond'][0]).toEqual('enamored');
  });
  it('Should keep the values of the original hash table and add values from table two when matching keys', () => {
    let returnedTable = leftJoin(hashOne, hashTwo);
    expect(returnedTable[0][0]['fond'][0]).toEqual('enamored');
    expect(returnedTable[0][0]['fond'][1]).toEqual('averse');
  });
  it('Should keep the values of the original table but add null to key/value when no matching key/value pair is present in table two ', () => {
    let returnedTable = leftJoin(hashOne, hashTwo);
    expect(returnedTable[3][0]['outfit'][0]).toEqual('garb');
    expect(returnedTable[3][0]['outfit'][1]).toEqual(null);
  });
});
