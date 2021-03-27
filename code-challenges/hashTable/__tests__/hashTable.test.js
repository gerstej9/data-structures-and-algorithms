let LinkedListMaster = require('../../../Data-Structures/linked-list/linked_list.js');
let LinkedList = LinkedListMaster.ll;
let HashTable = require('../hashTable.js');


describe('Hash Table functionality', () => {
  it('Should add a key/value pair', () => {
    let table = new HashTable(1024);
    table.add('James', 'student');
    expect(table.contains('James')).toBeTruthy();
  });
  it('Should retrieve a value if given a key', () => {
    let table = new HashTable(1024);
    table.add('James', 'student');
    expect(table.get('James')).toEqual('student');
  });
  it('Should return null for a key that does not exist', () => {
    let table = new HashTable(1024);
    table.add('James', 'student');
    expect(table.get('Frank')).toBeFalsy();
  });
  it('Should succesfully handle a collision within the table', () => {
    let table = new HashTable(1024);
    table.add('James', 'student');
    table.add('James', 'instructor');
    expect(table.contains('James')).toBeTruthy();
    expect(table.get('James')).toEqual('instructor');
    expect(table.find('James').next).toBeTruthy();

  });
  it('Should succesfully retrieve a value from a collision within the table', () => {
    let table = new HashTable(1024);
    table.add('James', 'student');
    table.add('James', 'instructor');
    expect(table.find('James').next.value['James']).toEqual('student');
  });
  it('Should succesfully hash a a key to an in-range value', () => {
    let table = new HashTable(1024);
    let hashOne = table.hash('James');
    let hashTwo = table.hash('JingleHeimerSchmidt');
    expect(hashOne < 1024 && hashOne>0).toBeTruthy();
    expect(hashTwo < 1024 && hashTwo>0).toBeTruthy();
  });
});

// expect(table.get('James').next.value['James']).toEqual('instructor');
//Add a key value pair to your hashtable
//Retrieving based on a key returns the value stored
//succesfully returns a null or a key that does not exist in hashtable
//succesfully handle a collision within the hashtable
//successfully retrieve a value from a bucket within the hashtable that has a collision
//Succesfully has a key to an in-range value
