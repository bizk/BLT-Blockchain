import { Blockchain } from './Blockchain';

let blockchain: Blockchain = new Blockchain(1);
blockchain.addBlock(blockchain.newBlock("CARLOS SANTIAGO YANZON"))

console.log("Is blockchain valid?", blockchain.isBlockChainValid());
console.log(blockchain)