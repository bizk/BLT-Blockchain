import { Block } from "./Block";

export class Blockchain {
    private difficulty: int;
    private blocks: Array<Block>;
    
    constructor(parameters) {
        
    }

    latestBlock(): Block {
        return this.blocks[this.blocks.length - 1];
    }

    newBlock(data: string): Block {
        latestBlock: Block = this.latestBlock();
        return new Block(latestBlock.getIndex() + 1, Date.now(), latestBlock.getHash(), data);
    }   

    addBlock(block: Block) {
        if (block != null) {
            block.mineBlock(this.difficulty);
            this.blocks.push(block)
        }
    }
}