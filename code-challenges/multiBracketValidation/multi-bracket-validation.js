'use strict';

'use strict';

class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Bracket {

  constructor() {
    // this.squiggleOpen = 0;
    // this.squiggleClose =0;
    // this.parenOpen = 0;
    // this.parenClose = 0;
    // this.squareOpen = 0;
    // this.squareClose = 0;
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

  verify() {
    let current = this.front;
    while(current){
      if(this.front.value === '{' && this.front.next.value === '}'){
        current = current.next.next;
      }else if(this.front.value === '(' && this.front.next.value === ')'){
        current = current.next.next;
      }else if(this.front.value === '[' && this.front.next.value === ']'){
        current = current.next.next;
      }else{
        return false;
      }
    }
    return true;
  }
}



function multipleValidationBracket(input) {

  let counter = new Bracket;

  for (let i = 0; i < input.length; i++) {

    if (input[i] === '{') { counter.enqueue(new Node('{'));}
    if (input[i] === '}') { counter.enqueue(new Node('}'));}
    if (input[i] === '(') { counter.enqueue(new Node('('));}
    if (input[i] === ')') { counter.enqueue(new Node(')')); }
    if (input[i] === '[') { counter.enqueue(new Node('['));}
    if (input[i] === ']') { counter.enqueue(new Node(']')); }
  }
  return counter.verify();
}

module.exports = multipleValidationBracket;
