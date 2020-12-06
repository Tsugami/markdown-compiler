import { Node, Token } from '../types';
import { peekOr } from '../tokenizer/TokenList';

const matchBold = (tokens: Token[]): Node => {
  if (!tokens.length || !peekOr([
    ['UNDERSCORE', 'UNDERSCORE', 'TEXT', 'UNDERSCORE', 'UNDERSCORE'],
    ['STAR', 'STAR', 'TEXT', 'STAR', 'STAR'],
  ], tokens)) {
    return null;
  }

  return { type: 'BOLD', value: tokens[2].value, consumed: 5 };
};

export default matchBold;
