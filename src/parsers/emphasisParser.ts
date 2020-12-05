import { ParserFunction } from '../types';
import { peekOr } from '../tokenizer/TokenList';

const match: ParserFunction = (tokens) => {
  if (peekOr([
    ['UNDERSCORE', 'TEXT', 'UNDERSCORE'],
    ['STAR', 'TEXT', 'STAR'],
  ], tokens)) return null;
  return { type: 'EMPHASIS', value: tokens[0].value, consumed: 3 };
};

export default match;
