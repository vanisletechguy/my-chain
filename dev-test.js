const Block = require('./block');

const newBlock = Block.mineBlock(Block.genesis(), 'NEW');
console.log(newBlock.toString());


