import { ParserFunction, Token, Node } from './types';
//  This method tries to match a sentence as many times as possible. It then
//  returns all matched nodes. It's the equivalent of `*`, also known as Kleene
//  star.
export function matchStar(tokens: Token[], parser: ParserFunction): [Node[], number] {
  const matchedNodes: Node[] = [];
  let consumed = 0;

  // eslint-disable-next-line no-constant-condition
  while (true) {
    const node = parser(tokens.slice(consumed));
    if (!node) break;
    matchedNodes.push(node);
    consumed += node.consumed;
  }

  return [matchedNodes, consumed];
}

// Tries to match one parser, the order is very important here as they get
// tested first-in-first-tried.
// If a parser matched, the function returns the matched node, otherwise, it
// returns a null node.
export function matchFirst(tokens: Token[], ...parsers: ParserFunction[]): Node | null {
  return parsers.reduce<null|Node>((r, parser) => (r || parser(tokens)), null);
}
