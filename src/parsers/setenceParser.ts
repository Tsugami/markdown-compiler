import { ParserFunction } from '../types';
import { matchFirst } from '../Util';
import boldParser from './boldParser';
import textParser from './textParser';
import emphasisParser from './emphasisParser';

// eslint-disable-next-line arrow-body-style
const match: ParserFunction = (tokens) => {
  return matchFirst(tokens, emphasisParser, boldParser, textParser);
};

export default match;
