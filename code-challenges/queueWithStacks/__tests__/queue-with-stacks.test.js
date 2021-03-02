'use strict';

const PseudoQueue = require('../queue-with-stacks.js');



describe('testing Queue constructor and prototype functions', () => {
  it('should instantiate an return the value 1 ', () => {
    const pseudo = new PseudoQueue();
    pseudo.enqueue(1);
    pseudo.enqueue(2);
    expect(pseudo.front.top.value).toEqual(1);
  });
});
