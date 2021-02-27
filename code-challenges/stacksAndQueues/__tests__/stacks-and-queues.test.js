'use strict';

const master = require('../stacks-and-queues');
const Stack = master.stack;
const Queue = master.queue;
const Node = master.node;


describe('testing Stack constructor and prototype functions', () => {
  it('should instantiate an empty Stack ', () => {
    const stack = new Stack;
    expect(stack).toBeTruthy();
  });
  it('should push a single value onto a stack', () => {
    const stack = new Stack;
    stack.push(new Node(1));
    expect(stack.top.value).toEqual(1);
  });
  it('should push multiple values onto a stack', () => {
    const stack = new Stack;
    stack.push(new Node(1));
    stack.push(new Node(2));
    stack.push(new Node(3));
    expect(stack.top.value).toEqual(3);
    expect(stack.top.next.value).toEqual(2);
    expect(stack.top.next.next.value).toEqual(1);
  });
  it('should pop a single value off a stack', () => {
    const stack = new Stack;
    stack.push(new Node(1));
    stack.pop();
    expect(stack.isEmpty()).toEqual(true);
  });
  it('should pop multiple values off a stack', () => {
    const stack = new Stack;
    stack.push(new Node(1));
    stack.push(new Node(2));
    stack.push(new Node(3));
    stack.pop();
    stack.pop();
    stack.pop();
    expect(stack.isEmpty()).toEqual(true);
  });
  it('should return the top value when peek is called', () => {
    const stack = new Stack;
    stack.push(new Node(2));
    stack.push(new Node(1));
    expect(stack.peek()).toEqual(1);
  });
  it('should throw an exception if peek or pop are called on an empty stack', () => {
    const stack = new Stack;
    expect(stack.peek()).toEqual('Stack is Empty');
    expect(stack.pop()).toEqual('Stack is Empty');
  });
});

describe('testing Queue constructor and prototype functions', () => {
  it('should instantiate an empty Queue ', () => {
    const queue = new Queue;
    expect(queue).toBeTruthy();
  });
  it('should enqueue a single value onto a queue', () => {
    const queue = new Queue;
    queue.enqueue(new Node(1));
    expect(queue.front.value).toEqual(1);
  });
  it('should enqueue multiple values onto a queue', () => {
    const queue = new Queue;
    queue.enqueue(new Node(1));
    queue.enqueue(new Node(2));
    queue.enqueue(new Node(3));
    expect(queue.front.value).toEqual(1);
    expect(queue.front.next.value).toEqual(2);
    expect(queue.front.next.next.value).toEqual(3);
  });
  it('should dequeue a single value off a queue', () => {
    const queue = new Queue;
    queue.enqueue(new Node(1));
    queue.dequeue();
    expect(queue.isEmpty()).toEqual(true);
  });
  it('should dequeue multiple values off a queue', () => {
    const queue = new Queue;
    queue.enqueue(new Node(1));
    queue.enqueue(new Node(2));
    queue.enqueue(new Node(3));
    queue.dequeue();
    queue.dequeue();
    queue.dequeue();
    expect(queue.isEmpty()).toEqual(true);
  });
  it('should return the front value when peek is called', () => {
    const queue = new Queue;
    queue.enqueue(new Node(1));
    queue.enqueue(new Node(2));
    expect(queue.peek()).toEqual(1);
  });
  it('should throw an exception if peek or pop are called on an empty queue', () => {
    const queue = new Queue;
    expect(queue.peek()).toEqual('Queue is Empty');
    expect(queue.dequeue()).toEqual('Queue is Empty');
  });
});
