'use strict';

const LinkedListMaster = require('../../Data-Structures/linked-list/linked_list.js');
const linkedList = LinkedListMaster.ll;


function zipLinkedList(llOne, llTwo){
  let finalLL = new linkedList;
  let llLong = llOne;
  let llShort = llTwo;
  let currentLong = llLong.head;
  let currentShort = llShort.head;
  while(currentLong && currentShort){
    finalLL.append(currentLong.value);
    finalLL.append(currentShort.value);
    currentLong = currentLong.next;
    currentShort = currentShort.next;
  }
  while(currentLong){
    finalLL.append(currentLong.value);
    currentLong = currentLong.next;
  }
  while(currentShort){
    finalLL.append(currentShort.value);
    currentShort = currentShort.next;
  }
  return finalLL;
}

module.exports = zipLinkedList;
