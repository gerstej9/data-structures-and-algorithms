'use strict';

const TreeMaster = require('../tree.js');

const Tree = TreeMaster.tree;
const Node = TreeMaster.node;


describe('testing Tree Class findMaximum Value method', () => {
  it('should return the greatest value in the tree', () => {
    const tree = new Tree();

    tree.root = new Node(5);
    tree.root.left = new Node(10);
    tree.root.left.left = new Node(20);
    tree.root.left.right = new Node(2);
    tree.root.right = new Node(4);
    tree.root.right.left = new Node(17);
    expect(tree.findMaximumValue()).toEqual(20);
  });
  it('should return the greatest value in the tree', () => {
    const tree = new Tree();

    tree.root = new Node(5);
    tree.root.left = new Node(-10);
    tree.root.left.left = new Node(-20);
    tree.root.left.right = new Node(-2);
    tree.root.right = new Node(-4);
    tree.root.right.left = new Node(-17);
    expect(tree.findMaximumValue()).toEqual(5);
  });
});
