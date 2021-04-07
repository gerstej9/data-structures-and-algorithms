# Graphs
Code Challenge 35 & Code Challenge 38 of Code Fellows Class 401

## Challenge
* Create a Graph class that is able to construct a graph with several prototype functions listed below

## API
* addNode: adds a new vertex to the graph
* addEdge: adds an edge between two nodes
* getNeighbors: finds all linked vertices from an initial vertex
* breadthFirst: traverses the graph and returns an array of all the values
* size: returns the size of all the nodes in the graph

## Approach & Efficiency
* I took the approach of creating functions with a O(V+E) time nd O(n^2) space

## Solution
To solve this problem I used basic constructor functions to create a vertex, an edge, and a graph before creating class functions for the graph that adds nodes and edges between them. I then utilized a helper function of getNeighbors which retrieves all the edges for a given node and used that in a breadth first traversal function. In addition I utilized my breadth first traversal function to analyze the size of the graph in another function