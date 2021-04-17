import { Block } from "./Block";
import { calculateHash } from "./utils";

export class Blockchain {
    private difficulty: number;
    private blocks: Array<Block>;
    
    constructor(parameters) {
        
    }

    latestBlock(): Block {
        return this.blocks[this.blocks.length - 1];
    }

    newBlock(data: string): Block {
        let latestBlock: Block = this.latestBlock();
        return new Block(latestBlock.getIndex() + 1, Date.now(), latestBlock.getHash(), data);
    }   

    addBlock(block: Block) {
        if (block != null) {
            block.mineBlock(this.difficulty);
            this.blocks.push(block)
        }
    }

    isFirstBlockValid(): boolean {
        let firstBlock: Block = this.blocks[0];

        if (firstBlock.getIndex() !== 0) return false;
        if (firstBlock.getPreviousHash() !== null) return false;
        if (firstBlock.getHash() === null || calculateHash(firstBlock) !== firstBlock.getHash()) return false;

        return true;
    }

    isValidNewBlock(newBlock: Block, previousBlock: Block): boolean {
        if (newBlock !== null && previousBlock !== null) {
            if (newBlock.getIndex() + 1 !== newBlock.getIndex()) return false;
            if (newBlock.getPreviousHash() === null || newBlock.getPreviousHash() !== previousBlock.getHash()) return false
            if (newBlock.getHash() === null || newBlock.getHash() !== calculateHash(newBlock)) return false

            return true
        }
        return false 
    }

    isBlockChainValid(): boolean {
        if (!this.isFirstBlockValid()) return false;

        for (let index = 1; index < this.blocks.length; index++) {
            let currentBlock: Block = this.blocks[index]
            let previousBlock: Block = this.blocks[index - 1] 
            
            if (!this.isValidNewBlock(currentBlock, previousBlock)) return false;
        }
        return true
    }
}
