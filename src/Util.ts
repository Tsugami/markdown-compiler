/* eslint-disable space-before-function-paren */
/* eslint-disable guard-for-in */
import {
  ParserFunction, Token, Node,
} from './types';
import { offset } from './tokenizer/TokenList';

//  This method tries to match a sentence as many times as possible. It then
//  returns all matched nodes. It's the equivalent of `*`, also known as Kleene
//  star.
export function matchStar<Parser extends ParserFunction, Return extends ReturnType<Parser>>
(tokens: Token[], parser: Parser): [Return[], number] {
  const matchedNodes: Return[] = [];
  let consumed = 0;

  // eslint-disable-next-line no-constant-condition
  while (true) {
    const node = parser(offset(tokens, consumed));
    if (!node) {
      break;
    }
    matchedNodes.push(node as Return);
    consumed += node.consumed;
  }

  return [matchedNodes, consumed];
}

// Tries to match one parser, the order is very important here as they get
// tested first-in-first-tried.
// If a parser matched, the function returns the matched node, otherwise, it
// returns a null node.
export function matchFirst<Parser extends ParserFunction>(
  tokens: Token[], ...parsers: Parser[]
): ReturnType<Parser> | null {
  // eslint-disable-next-line no-restricted-syntax
  for (const parser of parsers) {
    const result = parser(tokens) as Node;
    // console.log('MATCH', result, parser);
    if (result) return result as ReturnType<Parser>;
  }
  return null;
}

// eslint-disable-next-line no-unused-vars
type callbackFunction<V> = (value: V, index: number) => boolean
export function takeWhile<A>(arr: A[], callbackfn: callbackFunction<A>): A[] {
  const result = [];
  // eslint-disable-next-line no-restricted-syntax
  for (const i in arr) {
    if (callbackfn(arr[i], Number(i))) {
      break;
    }
    result.push(arr[i]);
  }
  return result;
}
