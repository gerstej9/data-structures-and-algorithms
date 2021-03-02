'use strict';

class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Stack{
  constructor(){
    this.top = null;
  }

  push(node){
    if(!this.top){
      this.top = node;
      return;
    }else{
      node.next = this.top;
      this.top = node;
      return;
    }
  }

  pop(){
    if(!this.top){
      return 'Stack is Empty';
    }
    let temp = this.top;
    this.top = temp.next;
    temp.next = null;
    return temp.value;
  }

  peek(){
    if(this.top){
      return this.top.value;
    }
    return ('Stack is Empty');
  }
}

class PseudoQueue{
  constructor(){
    this.front = new Stack();
    this.rear = new Stack();
  }

  enqueue(value){
    // console.log(this);
    if(!this.front.top){
      this.front.push(new Node(value));
    }else{
      while(this.front.top !== null){
        // console.log(this.front.top);
        this.rear.push(this.front.top);
        this.front.pop();
        // console.log(this.front.top);
      }
      this.front.push(new Node(value));
      console.log('first',this.rear.top);
    }
    return this;
  }

  dequeue(){
    if(this.front.top){
      this.front.pop();
    }else{
      return 'Queue is empty';
    }
  }
}

// let pseudo = new PseudoQueue();
// // pseudo.enqueue(5);
// // pseudo.enqueue(6);
// console.log('third', pseudo.rear);
// console.log('fourth', pseudo.front);

module.exports = PseudoQueue;
