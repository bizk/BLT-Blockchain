  import { sha256 } from 'js-sha256';

 export class Block {
    private objectString: string;
    private index: int;
    private timestamp: long;
    private hash: string;
    private previousHash: string;
    private data: string;
    private nonce: int;

    constructor(index: Int8Array, timestamp: long, previousHash: string, data: string) {
        let rand = generateRandomString(); 
        this.objectString = rand //We simulate the string value of the whole object bytes to save time
        this.hash = sha256(rand)
        this.index = index;
        this.timestamp = timestamp;
        this.previousHash = previousHash;
        this.data = data
    }

    calculateHash(): string {
        return this.hash
    }

    getIndex(): int {
        return this.index;
      }
    
    getTimestamp(): long {
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
    
    str(): string {
        return String(this.index) + String(this.timestamp) + this.previousHash + this.data + String(this.nonce);
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
        
      calculateHash(block: Block): string {
        let nonce = 0;
        while(sha256(generateRandomString()).substr(0, difficulty) !== ZEROES.substr(0, difficulty)) {
          nonce += 1
          this.hash = block.calculateHash(this);
        }
        this.nonce
          
        return null;
      }
}