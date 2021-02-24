'use strict';

const linkedListMaster = require('../../../Data-Structures/linked-list/linked_list.js');
const zipLinkedList = require('../ll-zip.js');


const linkedList = linkedListMaster.ll;



describe('testing zipLinkedList function', () => {
  it('should zip two linked lists provided as arguments into one', () => {
    const llOne = new linkedList;
    llOne.append(1);
    llOne.append(3);
    llOne.append(2);

    const llTwo = new linkedList;
    llTwo.append(5);
    llTwo.append(9);
    llTwo.append(4);
    let finalLl = zipLinkedList(llOne, llTwo);
    expect(finalLl.toString()).toEqual('{ 1 } -> { 5 } -> { 3 } -> { 9 } -> { 2 } -> { 4 } -> NULL');
  });
  it('should zip two linked lists provided as arguments into one', () => {
    const llOne = new linkedList;
    llOne.append(1);
    llOne.append(3);


    const llTwo = new linkedList;
    llTwo.append(5);
    llTwo.append(9);
    llTwo.append(4);
    let finalLl = zipLinkedList(llOne, llTwo);
    expect(finalLl.toString()).toEqual('{ 1 } -> { 5 } -> { 3 } -> { 9 } -> { 4 } -> NULL');
  });
  it('should zip two linked lists provided as arguments into one', () => {
    const llOne = new linkedList;
    llOne.append(1);
    llOne.append(3);
    llOne.append(2);


    const llTwo = new linkedList;
    llTwo.append(5);
    llTwo.append(9);
    let finalLl = zipLinkedList(llOne, llTwo);
    expect(finalLl.toString()).toEqual('{ 1 } -> { 5 } -> { 3 } -> { 9 } -> { 2 } -> NULL');
  });
});
