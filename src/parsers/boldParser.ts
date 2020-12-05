import { ParserFunction } from '../types';
import { peekOr } from '../tokenizer/TokenList';

const match: ParserFunction = (tokens) => {
  if (peekOr([
    ['UNDERSCORE', 'UNDERSCORE', 'TEXT', 'UNDERSCORE', 'UNDERSCORE'],
    ['STAR', 'STAR', 'TEXT', 'STAR', 'STAR'],
  ], tokens)) return null;
  return { type: 'BOLD', value: tokens[0].value, consumed: 5 };
};

export default match;
