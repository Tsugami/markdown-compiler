import { ParserFunction } from '../types';
import { peek } from '../tokenizer/TokenList';

const match: ParserFunction = (tokens) => {
  if (peek(['TEXT'], tokens)) {
    return null;
  }
  return { type: 'TEXT', value: tokens[0].value, consumed: 1 };
};

export default match;
