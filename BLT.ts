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

function mineBlock(params:type) {
  
}