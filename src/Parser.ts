import bodyParser from './parsers/bodyParser';
import { BodyNode, Token } from './types';

// Transforms a list of tokens into an Abstract Syntax Tree.
export function parser(tokens: Token[]): BodyNode {
  const body = bodyParser(tokens);

  if (tokens.length !== body?.consumed) {
    throw new Error(`Syntax error: ${tokens[body.consumed]}`);
  }

  return body;
}
