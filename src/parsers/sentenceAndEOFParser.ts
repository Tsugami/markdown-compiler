import { ParagraphNode, Token } from '../types';
import { peekAt } from '../tokenizer/TokenList';
import { matchStar } from '../Util';
import sentenceParser from './sentenceParser';

const matchSetenceAndEof = (tokens: Token[]): ParagraphNode => {
  const [nodes, consumed] = matchStar(tokens, sentenceParser);
  let count = consumed;

  if (!nodes.length) {
    return null;
  }

  if (peekAt(consumed, ['EOF'], tokens)) {
    count += 1;
  } else if (peekAt(consumed, ['NEWLINE', 'EOF'], tokens)) {
    count += 2;
  } else {
    return null;
  }

  return { setences: nodes, consumed: count };
};

export default matchSetenceAndEof;
