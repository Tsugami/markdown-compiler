import { Node, Token } from '../types';
import { peekOr } from '../tokenizer/TokenList';

const matchEmphasis = (tokens: Token[]): Node => {
  if (!peekOr([
    ['UNDERSCORE', 'TEXT', 'UNDERSCORE'],
    ['STAR', 'TEXT', 'STAR'],
  ], tokens)) return null;
  if (!tokens.length) {
    return null;
  }
  return { type: 'EMPHASIS', value: tokens[1].value, consumed: 3 };
};

export default matchEmphasis;
