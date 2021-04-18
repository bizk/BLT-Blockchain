  import { sha256 } from 'js-sha256';
import { generateRandomString } from './utils';

 export class Block {
    private index: number;
    private timestamp: number;
    private hash: string;
    private previousHash: string;
    private data: string;
    private nonce: number;

    constructor(index: number, timestamp: number, previousHash: string, data: string) {
        let rand = generateRandomString(); 
        this.hash = sha256(rand)
        this.index = index;
        this.timestamp = timestamp;
        this.previousHash = previousHash;
        this.data = data;
        this.nonce = 0; // tuve que agregar esto para evitar un error
    }

    getIndex(): number {
        return this.index;
      }
    
    getTimestamp(): number {
        return this.timestamp;
    }
    
    getHash(): string {
        return this.hash;
    }
    
    getPreviousHash(): string {
        return this.previousHash;
    }
    
    getData(): String {
        return this.data;
    }
    
    str(): String {
        return "" + String(this.index)  + String(this.timestamp) + this.previousHash + this.data + String(this.nonce);
    }
    
    toString(): string {
        let builder: string = "Block #";
        
        builder += String(this.index)
        builder += " [previousHash : " + this.previousHash
        builder += "timestamp : " + String(new Date(this.timestamp))
        builder += " [previousHash : " + this.previousHash + ", "
        builder += "data : " + this.data 
        builder += "hash : " + this.hash + "]"
        
        return builder;
      }
        
      calculateHash(block: Block): String {
        let blockString: String = block.str();
        let blockDigest: String = sha256(blockString.toString())

        return blockDigest
      }

      mineBlock(difficulty: number) {
        let nonce = 0;
        while(sha256(generateRandomString()).substr(0, difficulty) !== ZEROES.substr(0, difficulty)) {
          nonce += 1
          this.hash = this.calculateHash(this).toString();
        }
        //this.nonce
          
        return null;
      }
}

const ZEROES = "00000000000000000000000000000000000000000000000000000000000000000000000000000"
