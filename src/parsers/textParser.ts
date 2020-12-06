import { Token, Node } from '../types';
import { peek } from '../tokenizer/TokenList';

const matchText = (tokens: Token[]): Node => {
  if (!tokens.length || !peek(['TEXT'], tokens)) {
    return null;
  }

  return { type: 'TEXT', value: tokens[0].value, consumed: 1 };
};

export default matchText;
