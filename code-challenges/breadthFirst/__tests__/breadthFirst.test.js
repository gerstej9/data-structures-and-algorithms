const graphMaster = require('../breadthFirst.js');
const Vertex = graphMaster.vertex;
const Graph = graphMaster.graph;

describe('Testing ability to traverse a single node', () => {
  it('Should add a new node to a graph', () => {
    let test = new Graph();
    let one = new Vertex('one');
    test.addNode(one);
    expect(test.breadthFirst(one)).toBeTruthy();
    expect(test.breadthFirst(one)).toEqual['one'];
  });
});


describe('Testing graph breadth First functionality', () => {

  let test = new Graph();


  let one = new Vertex('one');
  let two = new Vertex('two');
  let three = new Vertex('three');
  let four = new Vertex('four');
  let five = new Vertex('five');
  let six = new Vertex('six');

  test.addNode(one);
  test.addNode(two);
  test.addNode(three);
  test.addNode(four);
  test.addNode(five);
  test.addNode(six);

  test.addEdge(one, three);
  test.addEdge(two, four);
  test.addEdge(one, four);
  test.addEdge(four, two);
  test.addEdge(four, five);
  test.addEdge(two, six);

  it('Should traverse all nodes in a breadth first manner', () => {
    expect(test.breadthFirst(one)).toBeTruthy();
    expect(Array.isArray(test.breadthFirst(one))).toBeTruthy();
    expect(test.breadthFirst(one).length).toEqual(6);
  });
});

describe('Testing graph breadth First functionality', () => {

  let test = new Graph();


  let one = new Vertex('Pandora');
  let two = new Vertex('Metroville');
  let three = new Vertex('Arendelle');
  let four = new Vertex('Monstropolis');
  let five = new Vertex('Narnia');
  let six = new Vertex('Naboo');

  test.addNode(one);
  test.addNode(two);
  test.addNode(three);
  test.addNode(four);
  test.addNode(five);
  test.addNode(six);

  test.addEdge(one, three);
  test.addEdge(three, two);
  test.addEdge(two, five);
  test.addEdge(five, six);
  test.addEdge(three, six);
  test.addEdge(six, four);
  test.addEdge(three, four);
  test.addEdge(two, four);

  it('Should traverse all nodes in a breadth first manner', () => {
    expect(test.breadthFirst(one)).toBeTruthy();
    expect(Array.isArray(test.breadthFirst(one))).toBeTruthy();
    expect(test.breadthFirst(one).length).toEqual(6);
    expect(test.breadthFirst(one)).toEqual['Pandora', 'Arendelle', 'Metroville', 'Monstroplolis', 'Narnia', 'Naboo'];
  });
});


