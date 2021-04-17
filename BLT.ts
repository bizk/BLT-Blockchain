const world = 'world';

import { sha256 } from 'js-sha256';

import { Block } from "./Block";

export function hello(word: string = world): string {
  return `Hello ${world}! `;
}
