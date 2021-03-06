'use strict';

const TreeMaster = require('../tree.js');

const Tree = TreeMaster.tree;
const BinarySearchTree = TreeMaster.bst;
const Node = TreeMaster.node;


describe('testing Tree Class Constructor and Methods', () => {
  it('should instantiate a new Tree', () => {
    const tree = new Tree;
    expect(tree).toBeTruthy();
  });
  it('should instantiate a new Tree with a root node', () => {
    const tree = new Tree;
    tree.root = new Node(5);
    expect(tree.root.value).toEqual(5);
  });
  it('should assign a left and right child to a root node', () => {
    const tree = new Tree;
    tree.root = new Node(5);
    tree.root.left = new Node(3);
    tree.root.right = new Node(8);
    expect(tree.root.left.value).toEqual(3);
    expect(tree.root.right.value).toEqual(8);
  });
  it('should return a collection from preorder traversal', () => {
    const tree = new Tree();

    tree.root = new Node('A');
    tree.root.left = new Node('B');
    tree.root.left.left = new Node('D');
    tree.root.left.right = new Node('E');
    tree.root.right = new Node('C');
    tree.root.right.left = new Node('F');
    let preOrder = tree.preOrder();
    expect(preOrder).toEqual([ 'A', 'B', 'D', 'E', 'C', 'F' ]);
  });
  it('should return a collection from postorder traversal', () => {
    const tree = new Tree();

    tree.root = new Node('A');
    tree.root.left = new Node('B');
    tree.root.left.left = new Node('D');
    tree.root.left.right = new Node('E');
    tree.root.right = new Node('C');
    tree.root.right.left = new Node('F');
    let postOrder = tree.postOrder();
    expect(postOrder).toEqual([ 'D', 'E', 'B', 'F', 'C', 'A' ]);
  });
  it('should return a collection from in order traversal', () => {
    const tree = new Tree();

    tree.root = new Node('A');
    tree.root.left = new Node('B');
    tree.root.left.left = new Node('D');
    tree.root.left.right = new Node('E');
    tree.root.right = new Node('C');
    tree.root.right.left = new Node('F');
    let inOrder = tree.inOrder();
    expect(inOrder).toEqual([ 'D', 'B', 'E', 'A', 'F', 'C' ]);
  });
});
