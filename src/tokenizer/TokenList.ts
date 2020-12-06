import { TokenType, Token } from '../types';

export function peek(types: TokenType[], tokens: Token[]): boolean {
  if (!tokens.length) return false;
  if (types.some((type, i) => tokens[i].type !== type)) {
    return false;
  }
  return true;
}

export function peekOr(choices: TokenType[][], tokens: Token[]): boolean {
  return choices.some((types) => peek(types, tokens));
}

export function offset(tokens: Token[], index: number): Token[] {
  return tokens.slice(index);
}

export function peekAt(index: number, types: TokenType[], tokens: Token[]): boolean {
  const previusToken = offset(tokens, index);
  return peek(types, previusToken);
}
