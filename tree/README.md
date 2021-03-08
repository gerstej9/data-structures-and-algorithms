# Trees
Code Challenge 15 & 16

## Challenge
### 15
* Create a class for a binary tree with constructor function and traversal methods
* Create a class for a binary search tree with a constructor function and add and contains methods
### 16
* Create a method function that will find the maximum value on any given tree

## Approach & Efficiency
### 15
I took the approach of trying to utilize recursive functions to traverse the tree and search the binary search tree

### 16
I utilized the traverse method coupled with a comparator function to find the maximum value.

## API
* Tree Pre-Order traversal utilizes root - left - right order
* Tree In-order utilizes left - root -right order
* Tree Post-order utilizes left - right -root order
* Tree maximum value function utilizes pre-order traversal and returns maximum value
* BST add method uses recursive function to compare left and right values and adds a new node at appropriate spot
* BST contains method uses a while loop and comparatiive function to move through the tree until it hits the target value or a null value and returns true or false
