import { ParagraphNode, Token } from '../types';
import { peekAt } from '../tokenizer/TokenList';
import { matchStar } from '../Util';
import sentenceParser from './sentenceParser';

const matchSentenceAndNewLine = (tokens: Token[]): ParagraphNode => {
  const [nodes, consumed] = matchStar(tokens, sentenceParser);

  if (!nodes.length || !peekAt(consumed, ['NEWLINE', 'NEWLINE'], tokens)) {
    return null;
  }

  return { setences: nodes, consumed: consumed + 2 };
};

export default matchSentenceAndNewLine;
