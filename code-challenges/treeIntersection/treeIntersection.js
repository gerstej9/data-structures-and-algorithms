'use strict';

const treeMaster = require('../../tree/tree.js');
const Tree = treeMaster.tree;
const Node = treeMaster.node;

let treeOne = new Tree();
treeOne.root = new Node(150);
treeOne.root.left = new Node(100);
treeOne.root.left.left = new Node(75);
treeOne.root.left.right = new Node(160);
treeOne.root.left.right.left = new Node(125);
treeOne.root.left.right.right = new Node(175);
treeOne.root.right = new Node(250);
treeOne.root.right.left = new Node(200);
treeOne.root.right.right = new Node(350);
treeOne.root.right.right.left = new Node(300);
treeOne.root.right.right.right = new Node(500);

let treeTwo = new Tree();
treeTwo.root = new Node(42);
treeTwo.root.left = new Node(100);
treeTwo.root.left.left = new Node(15);
treeTwo.root.left.right = new Node(160);
treeTwo.root.left.right.left = new Node(125);
treeTwo.root.left.right.right = new Node(175);
treeTwo.root.right = new Node(600);
treeTwo.root.right.left = new Node(200);
treeTwo.root.right.right = new Node(350);
treeTwo.root.right.right.left = new Node(4);
treeTwo.root.right.right.right = new Node(500);

const treeIntersection = (treeOne, treeTwo) => {
  let hash = {};
  const preOrder = (tree) => {
    let array = [];
    const preOrderHelper = (node) => {
      if(hash[node.value]){
        array.push(node.value);
      }else{
        hash[node.value] = node.value;
      }
      if (node.left) {
        preOrderHelper(node.left);
      }
      if (node.right) {
        preOrderHelper(node.right);
      }
    };
    let current = tree.root;
    preOrderHelper(current);
    return array;
  };
  preOrder(treeOne);
  return preOrder(treeTwo);
};

module.exports = {
  tree: Tree,
  node: Node,
  treeIntersection: treeIntersection,
};


