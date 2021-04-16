const world = 'world';

import { sha256 } from 'js-sha256';

import { Block } from "./Block";

export function hello(word: string = world): string {
  return `Hello ${world}! `;
}

function digest(block:Block): string {
    if (block !== null) {
       return sha256(block.toString())
    }
    return ""
}

const ZEROES = "00000000000000000000000000000000000000000000000000000000000000000000000000000"

function mineBlock(difficulty: int, block: Block) {
  let nonce = 0;
  while(sha256(generateRandomString()).substr(0, difficulty) !== ZEROES.substr(0, difficulty)) {
    nonce += 1
    hash = block.calculateHash;
  }
}