import { Token, ParagraphNode } from '../types';
import { matchFirst } from '../Util';
import setenceAndNewLineParser from './sentenceAndNewLineParser';
import setenceAndEOFParser from './sentenceAndEOFParser';

// eslint-disable-next-line arrow-body-style
const matchParagraph = (tokens: Token[]): ParagraphNode => {
  return matchFirst(tokens, setenceAndNewLineParser, setenceAndEOFParser);
};

export default matchParagraph;
