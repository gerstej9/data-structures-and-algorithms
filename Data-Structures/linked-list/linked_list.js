'use strict';

class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class LinkedList{
  constructor() {
    this.head = null;
  }

  traverse() {
    let current = this.head;

    while(current.next){
      console.log(current.value);
      current = current.next;
    }
    console.log(current.value);
  }

  insert(value){
    if(!value){
      throw new Error('Improper value passed as argument');
    }
    let current = new Node(value);
    current.next = this.head;
    this.head = current;
  }

  includes(value){
    let current = this.head;
    if(!value){
      throw new Error('Improper value passed as argument');
    }
    if(!current){
      throw new Error('Linked List invalid');
    }
    while(current){
      if(current.value === value){
        return true;
      }
      current = current.next;
    }
    return false;
  }

  toString(){
    let current = this.head;
    if(!current){
      throw new Error('Linked List invalid');
    }
    let finalStr = '';
    while(current){
      finalStr += `{ ${current.value} } -> `;
      current = current.next;
    }
    return finalStr += 'NULL';
  }

  append(value){
    let current = this.head;

    while(current.next){
      current = current.next;
    }
    current.next = new Node(value);
  }

  insertBefore(value, targetValue){
    let current = this.head;
    if(current.value === targetValue){
      this.insert(value);
    }else{
      while(current.next.value !== targetValue){
        current = current.next;
      }
      let temp = new Node(value);
      temp.next = current.next;
      current.next = temp;
    }
  }

  insertAfter(value, targetValue){
    let current = this.head;
    while(current.value !== targetValue){
      current = current.next;
    }
    let temp = new Node(value);
    temp.next = current.next;
    current.next = temp;
  }

  kthFromEnd(k){
    let llArray = [];
    let current = this.head;
    while(current){
      llArray.push(current.value);
      current = current.next;
    }
    llArray.reverse();
    if ( k >= llArray.length || k < 0){
      return 'Invalid Input Number';
    }else{
      return llArray[k];
    }
  }
}

// const ll = new LinkedList;
// ll.insert(3);
// ll.insert(2);
// ll.insert(1);
// ll.append(5);
// ll.insertBefore(6, 2);
// ll.insertAfter(7, 3);
// // ll.traverse();
// ll.kthFromEnd(0);
// ll.kthFromEnd(3);
module.exports = {
  ll: LinkedList,
  node: Node
};

