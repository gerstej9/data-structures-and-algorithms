'use strict';

const TreeMaster = require('../tree.js');

const Tree = TreeMaster.tree;
const Node = TreeMaster.node;


describe('testing Tree Class breadthFirst Value method', () => {
  it('should return the greatest value in the tree', () => {
    const tree = new Tree();

    tree.root = new Node(2);
    tree.root.left = new Node(7);
    tree.root.left.left = new Node(2);
    tree.root.left.right = new Node(6);
    tree.root.left.right.left = new Node(5);
    tree.root.left.right.right = new Node(11);
    tree.root.right = new Node(5);
    tree.root.right.right = new Node(9);
    tree.root.right.right.left = new Node(4);
    expect(tree.breadthFirst()).toEqual([
      2, 7,  5, 2, 6,
      9, 5, 11, 4
    ]);
  });
  it('should return the greatest value in the tree', () => {
    const tree = new Tree();

    tree.root = new Node(0);
    tree.root.left = new Node(0);
    tree.root.left.left = new Node(0);
    tree.root.left.right = new Node(0);
    tree.root.left.right.left = new Node(0);
    tree.root.left.right.right = new Node(0);
    tree.root.right = new Node(0);
    tree.root.right.right = new Node(0);
    tree.root.right.right.left = new Node(0);
    expect(tree.breadthFirst()) !== ([
      2, 7,  5, 2, 6,
      9, 5, 11, 4
    ]);
  });
});
