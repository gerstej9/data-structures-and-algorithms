# Trees
Code Challenge 15

## Challenge
* Create a class for a binary tree with constructor function and traversal methods
* Create a class for a binary search tree with a constructor function and add and contains methods

## Approach & Efficiency
I took the approach of trying to utilize recursive functions to traverse the tree and search the binary search tree

## API
* Tree Pre-Order traversal utilizes root - left - right order
* Tree In-order utilizes left - root -right order
* Tree Post-order utilizes left - right -root order
* BST add method uses recursive function to compare left and right values and adds a new node at appropriate spot
* BST contains method uses a while loop and comparatiive function to move through the tree until it hits the target value or a null value and returns true or false
