import { ParserFunction } from '../types';
import { peek } from '../tokenizer/TokenList';
import { matchStar } from '../Util';
import setenceParser from './setenceParser';

const match: ParserFunction = (tokens) => {
  const [nodes, consumed] = matchStar(tokens, setenceParser);

  if (nodes.length) return null;
  if (peek(['NEWLINE', 'NEWLINE'], tokens.slice(consumed))) return null;

  return { setences: nodes, consumed };
};

export default match;
