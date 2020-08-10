const Block = require('./block');

describe('Block', () => {

   let data, lastBlock, block;
   beforeEach(() => {
      data = 'blah';
      lastBlock = Block.genesis();
      block = Block.mineBlock(lastBlock, data);
   });

   it('Set data to input data', () => {
      expect(block.data).toEqual(data);
   });
   it('sets the `lastHash` to the hash of the last block', () => {
      expect(block.lastHash).toEqual(lastBlock.hash);
   });

});
