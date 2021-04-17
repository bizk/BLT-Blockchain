import { sha256 } from 'js-sha256';
import { Block } from "./Block";

    function generateRandomString() {
        return Math.random().toString(16).substr(2, 8)
    }
    export {generateRandomString};
    
     function calculateHash(block: Block): String {
        let blockString: String = block.str();
        let blockDigest: String = sha256(blockString.toString())
    
        return blockDigest
    }

    export {calculateHash};