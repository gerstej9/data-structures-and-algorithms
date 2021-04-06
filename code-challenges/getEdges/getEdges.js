'use strict';

class Vertex {
  constructor(value){
    this.value = value;
  }
}

class Edge{
  constructor(vertex, weight){
    this.vertex = vertex,
    this.weight = weight;
  }
}

class Graph{
  constructor (){
    this.adjacencyList = new Map();
  }

  addNode(node){
    this.adjacencyList.set(node, []);
  }

  addEdge(startVertex, endVertex, weight = 0) {

    if (!this.adjacencyList.has(startVertex)) {
      throw new Error('Invalid start vertex');
    }

    const adjacencies = this.adjacencyList.get(startVertex);
    adjacencies.push(new Edge(endVertex, weight));
  }

  getNeighbors(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      throw new Error('no neighbors for that vertex');
    }

    return [...this.adjacencyList.get(vertex)];
  }

  breadthFirst(vertex) {

    const queue = [];
    const visited = [];

    queue.unshift(vertex);
    visited.push(vertex);

    while (queue.length) {

      const currentVertex = queue.pop();
      const neighbors = this.getNeighbors(currentVertex);

      for (let neighbor of neighbors) {

        const neighborVertex = neighbor.vertex;

        if (visited.includes(neighborVertex)) {
          continue;
        } else {
          visited.push(neighborVertex);
          queue.unshift(neighborVertex);
        }
      }
    }

    return visited;
  }


  depthFirst(vertex) {

    const visitedVertices = new Set();

    visitedVertices.add(vertex);
    const traverse = (current, visited) => {

      visited.add(current);

      const neighbors = this.getNeighbors(current);

      for (let neighbor of neighbors) {
        if (!visited.has(neighbor.vertex)) {
          traverse(neighbor.vertex, visited);
        }
      }
    };
    traverse(vertex, visitedVertices);
    return visitedVertices;
  }

  size(start){
    let arr = this.breadthFirst(start);
    return arr.length;
  }
  getEdges(cities){
    let price = 0;
    let stack = [];
    for(let i = 0; i < cities.length-1; i++){
      let edges = this.getNeighbors(cities[i]);
      if(!edges){
        return [false, 0];
      }
      for(let j = 0; j < edges.length; j++){
        if(edges[j].vertex.value === cities[i+1].value){
          stack.push(edges[j].vertex.value);
          price += edges[j].weight;
        }
      }
      if(stack.length === 0){
        return [false, 0];
      }
      stack.pop();
    }
    return [true, price];
  }
}


module.exports = {
  vertex: Vertex,
  edge: Edge,
  graph: Graph,
};
