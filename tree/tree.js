'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }
  preOrder() {
    let array = [];
    const preOrderHelper = (node) => {
      array.push(node.value);
      if (node.left) {
        preOrderHelper(node.left);
      }
      if (node.right) {
        preOrderHelper(node.right);
      }
    };

    let current = this.root;
    preOrderHelper(current);
    return array;
  }
  postOrder() {
    let array = [];
    const postOrderHelper = (node) => {
      if (node.left) {
        postOrderHelper(node.left);
      }
      if (node.right) {
        postOrderHelper(node.right);
      }
      array.push(node.value);
    };

    let current = this.root;
    postOrderHelper(current);
    return array;
  }

  inOrder() {
    let array = [];
    const inOrderHelper = (node) => {
      if (node.left) {
        inOrderHelper(node.left);
      }
      array.push(node.value);
      if (node.right) {
        inOrderHelper(node.right);
      }
    };

    let current = this.root;
    inOrderHelper(current);
    return array;
  }

  findMaximumValue(){
    let max = 0;
    const preOrderHelper = (node) => {
      if(node.value > max){
        max = node.value;
      }
      if (node.left) {
        preOrderHelper(node.left);
      }
      if (node.right) {
        preOrderHelper(node.right);
      }
    };

    let current = this.root;
    preOrderHelper(current);
    return max;
  }
  breadthFirst(){
    let current = null;
    let queue = [];
    let treeArray = [];
    queue.unshift(this.root);
    while(queue.length){
      current = queue.pop();
      treeArray.push(current.value);
      if(current.left){
        queue.unshift(current.left);
      }
      if(current.right){
        queue.unshift(current.right);
      }
    }
    return treeArray;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  add(value) {
    let node = new Node(value);
    let current = this.root;
    const helper = (current) => {
      if(current.value > value && current.left === null){
        node.left = current.left;
        node.right = current.right;
        current.left = node;
      }
      if(current.value > value){
        helper(current.left);
      }if(current.value < value && current.right !== null){
        node.left = current.left;
        node.right = current.right;
        current.right = node;
      }if(current.value < value){
        helper(current.right);
      }
    };
    helper(current);
  }
  contains(value) {
    let current = this.root;
    while(current !== null && current.value !== value){
      if(value < current.value){
        current = current.left;
      }else if(value > current.value){
        current = current.right;
      }
    }
    if(!current){
      return false;
    }else{
      return true;
    }
  }
}


// const tree = new Tree();

// tree.root = new Node(2);
// tree.root.left = new Node(7);
// tree.root.left.left = new Node(2);
// tree.root.left.right = new Node(6);
// tree.root.left.right.left = new Node(5);
// tree.root.left.right.right = new Node(11);
// tree.root.right = new Node(5);
// tree.root.right.right = new Node(9);
// tree.root.right.right.left = new Node(4);
// console.log(tree.breadthFirst());


module.exports= {
  tree: Tree,
  bst: BinarySearchTree,
  node: Node
};
