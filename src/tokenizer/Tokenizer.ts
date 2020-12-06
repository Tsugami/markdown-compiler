import { Token } from '../types';
import { SimpleScanner, TextScanner } from './Scanner';

export function scanOneToken(plainMarkdown: string): Token {
  const scanners = [SimpleScanner, TextScanner];
  const token = scanners.reduce<Token>((v, scan) => (v || scan(plainMarkdown)), null);

  if (!token) {
    throw new Error(`The scanners could not match the given input: ${plainMarkdown}`);
  }

  return token;
}

export function tokenize(plainMarkdown: string): Token[] {
  const tokens: Token[] = [];
  let rest: string = plainMarkdown;

  do {
    const token = scanOneToken(rest);
    rest = rest.slice(token.value.length || 1);
    tokens.push(token);
  } while (rest);

  return tokens.concat([{ type: 'EOF', value: '' }]);
}
