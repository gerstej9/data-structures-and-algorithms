const graphMaster = require('../getEdges.js');
const Vertex = graphMaster.vertex;
const Graph = graphMaster.graph;


describe('Testing graph getEdges functionality', () => {

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

  test.addEdge(one, three, 150);
  test.addEdge(three, two, 99);
  test.addEdge(two, five,37);
  test.addEdge(five, six, 250);
  test.addEdge(one, two, 82);
  test.addEdge(six, four, 73);
  test.addEdge(three, four, 42);
  test.addEdge(two, four, 105);
  test.addEdge(two, six, 26);

  test.addEdge(three, one, 150);
  test.addEdge(two, three, 99);
  test.addEdge(five, two,37);
  test.addEdge(six, five, 250);
  test.addEdge(two, one, 82);
  test.addEdge(four, six, 73);
  test.addEdge(four, three, 42);
  test.addEdge(four, two, 105);
  test.addEdge(six, two, 26);

  it('Should return whether a direct route is possible and the price of it', () => {
    expect(test.getEdges([one, two])).toEqual([true, 82]);
    expect(test.getEdges([three, four, six])).toEqual([true, 115]);
    expect(test.getEdges([six, one])).toEqual([false, 0]);
    expect(test.getEdges([five, three, six])).toEqual([false, 0]);
  });
});

