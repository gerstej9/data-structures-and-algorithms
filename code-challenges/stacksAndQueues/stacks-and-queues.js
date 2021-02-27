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
    if(this.isEmpty()){
      this.top = node;
      return;
    }else{
      node.next = this.top;
      this.top = node;
    }
  }

  pop(){
    if(this.isEmpty()){
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

  isEmpty(){
    return this.top === null;
  }
}

class Queue{
  constructor(){
    this.front = null;
    this.rear = null;
  }

  enqueue(node){
    if(this.isEmpty()){
      this.front = node;
      this.rear = node;
    }else{
      this.rear.next = node;
      this.rear = node;
    }
  }

  dequeue(){
    if(this.isEmpty()){
      return 'Queue is Empty';
    }
    let temp = this.front;
    this.front = temp.next;
    return temp.value;
  }

  peek(){
    if(this.front){
      return this.front.value;
    }
    return 'Queue is Empty';
  }

  isEmpty(){
    return this.front === null;
  }
}

module.exports = {
  stack: Stack,
  queue: Queue,
  node: Node
};

