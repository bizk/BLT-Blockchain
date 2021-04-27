import { Block } from "./Block";
import { calculateHash } from "./utils";

export class Blockchain {
    private difficulty: number;
    private blocks: Array<Block>;
    
    constructor(difficulty: number) {
        this.difficulty = difficulty
        this.blocks = new Array;
    }

    latestBlock(): Block {
        return this.blocks[this.blocks.length - 1];
    }

    newBlock(data: string): Block {
        let latestBlock: Block = this.latestBlock();
        if (latestBlock !== undefined) return new Block(latestBlock.getIndex() + 1, Date.now(), latestBlock.getHash(), data);

        return new Block(0, Date.now(), "", data);
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
        if (firstBlock.getPreviousHash() !== "") return false;
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
        console.log("Was not here")
        if (!this.isFirstBlockValid()) return false;
        for (let index = 1; index < this.blocks.length; index++) {
            let currentBlock: Block = this.blocks[index]
            let previousBlock: Block = this.blocks[index - 1] 
            
            if (!this.isValidNewBlock(currentBlock, previousBlock)) return false;
        }
        return true
    }
}
