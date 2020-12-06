import { Token, BodyNode } from '../types';
import { matchStar } from '../Util';
import paragraphParser from './paragraphParser';

export default (tokens: Token[]): BodyNode => {
  const [nodes, consumed] = matchStar(tokens, paragraphParser);
  if (!nodes.length) {
    return null;
  }
  return { paragraphs: nodes, consumed };
};
