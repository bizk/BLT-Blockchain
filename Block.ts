  import { sha256 } from 'js-sha256';

 export class Block {
    private objectString: string;
    private index: int;
    private timestamp: long;
    private hash: string;
    private previousHash: string;
    private data: string;
    private nonce: int;

    constructor() {
        let rand = Math.random().toString(16).substr(2, 8); 
        this.objectString = rand //We simulate the string value of the whole object bytes to save time
        this.hash = sha256(rand)

    }

    //This should convert the whole object to a string
    toString(): string {
        return this.objectString //We return this simulation of string
    }
}