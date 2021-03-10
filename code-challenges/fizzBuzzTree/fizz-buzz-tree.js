'use strict';

class KNode{
  constructor(value, size){
    this.value = value;
    this.children = new Array(size);
  }
}

class Kary{
  constructor(k){
    this.root = null;
    this.k = k;
  }
}

function fizzBuzzTree(tree){
  let newTree = tree;
  let current = null;
  let queue = [];

  queue.unshift(newTree.root);

  while(queue.length){
    current = queue.pop();
    if(current.value % 3 === 0 && current.value % 5 === 0 && current.value !== 0){
      current.value = 'Fizz Buzz';
    } else if(current.value % 3 === 0 && current.value !== 0){
      current.value = 'Fizz';
    } else if(current.value % 5 === 0 && current.value !== 0){
      current.value = 'Buzz';
    } else {
      current.value = `${current.value}`;
    }
    for(let i = 0; i < current.children.length; i++){
      if(current.children[i]){
        queue.unshift(current.children[i]);
      }

    }
  }
  return newTree;
}

// const karyTree = new Kary(3);

// karyTree.root = new KNode(0, karyTree.k);
// karyTree.root.children[0] = new KNode(1, karyTree.k);
// karyTree.root.children[1] = new KNode(2, karyTree.k);
// karyTree.root.children[2] = new KNode(3, karyTree.k);
// karyTree.root.children[0].children[0] = new KNode(5, karyTree.k);
// karyTree.root.children[0].children[2] = new KNode(8, karyTree.k);
// karyTree.root.children[1].children[0] = new KNode(9, karyTree.k);
// karyTree.root.children[1].children[1] = new KNode(15, karyTree.k);
// karyTree.root.children[2].children[1] = new KNode(30, karyTree.k);
// karyTree.root.children[2].children[2] = new KNode(3, karyTree.k);

// let newKaryTree = fizzBuzzTree(karyTree);

// console.log(newKaryTree.root.value);
// console.log(newKaryTree.root.children[1].value);
// console.log(newKaryTree.root.children[2].value);
// console.log(newKaryTree.root.children[0].children[0].value);
// console.log(newKaryTree.root.children[1].children[1].value);
// console.log(newKaryTree.root.children[2].children[1].value);

module.exports = {
  KNode: KNode,
  Kary : Kary,
  fizzBuzzTree: fizzBuzzTree,
};
