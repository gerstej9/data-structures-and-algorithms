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

const bst = new BinarySearchTree();

// bst.root = new Node(10);
// bst.root.left = new Node(7);
// bst.root.left.left = new Node(5);
// bst.root.left.right = new Node(9);
// bst.root.right = new Node(13);
// bst.root.right.left = new Node(11);

// console.log(bst.contains(15));

// console.log(bst.contains(2));

// bst.add(15);
// console.log(bst);
// console.log(bst.contains(15));
const tree = new Tree();

tree.root = new Node('A');
tree.root.left = new Node('B');
tree.root.left.left = new Node('D');
tree.root.left.right = new Node('E');
tree.root.right = new Node('C');
tree.root.right.left = new Node('F');

console.log('Pre');
console.log(tree.preOrder());
console.log('In');
console.log(tree.inOrder());
console.log('Post');
console.log(tree.postOrder());

module.exports= {
  tree: Tree,
  bst: BinarySearchTree,
  node: Node
};
