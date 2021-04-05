# Breadth First Graph Traversal
Code Challenge 36 of Code Fellows Class 401

## Challenge
* Create a Graph prototype for breadth first traversal

## API
* breadthFirst: traverses the graph and returns an array of all the values

## Approach & Efficiency
* I took the approach of creating functions with a O(V+E) time nd O(n^2) space

## Solution
To solve this problem I used basic constructor functions to create a vertex, an edge, and a graph before creating class functions for the graph that adds nodes and edges between them. I then utilized a helper function of getNeighbors which retrieves all the edges for a given node and used that in a breadth first traversal function.