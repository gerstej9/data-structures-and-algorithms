const fizzBuzzMaster = require('../fizz-buzz-tree.js');
const KNode = fizzBuzzMaster.KNode;
const Kary = fizzBuzzMaster.Kary;
const fizzBuzzTree = fizzBuzzMaster.fizzBuzzTree;

let karyTree = new Kary(3);
beforeEach(() => {

  karyTree.root = new KNode(0, karyTree.k);
  karyTree.root.children[0] = new KNode(1, karyTree.k);
  karyTree.root.children[1] = new KNode(2, karyTree.k);
  karyTree.root.children[2] = new KNode(3, karyTree.k);
  karyTree.root.children[0].children[0] = new KNode(5, karyTree.k);
  karyTree.root.children[0].children[2] = new KNode(8, karyTree.k);
  karyTree.root.children[1].children[0] = new KNode(9, karyTree.k);
  karyTree.root.children[1].children[1] = new KNode(15, karyTree.k);
  karyTree.root.children[2].children[1] = new KNode(30, karyTree.k);
  karyTree.root.children[2].children[2] = new KNode(3, karyTree.k);

});


describe('Testing fizz buzz tree function', () => {
  it('Should return Fizz', () => {
    let newKaryTree = fizzBuzzTree(karyTree);
    expect(newKaryTree.root.children[2].value).toEqual('Fizz');
  });
  it('Should return Buzz', () => {
    let newKaryTree = fizzBuzzTree(karyTree);
    expect(newKaryTree.root.children[0].children[0].value).toEqual('Buzz');
  });
  it('Should return FizzBuzz', () => {
    let newKaryTree = fizzBuzzTree(karyTree);
    expect(newKaryTree.root.children[1].children[1].value).toEqual('Fizz Buzz');
  });
  it('Should return an interger in string format', () => {
    let newKaryTree = fizzBuzzTree(karyTree);
    expect(newKaryTree.root.value).toEqual('0');
  });
});
