import { takeWhile, matchFirst } from '../Util';
import { Token, ParserFunction } from '../types';

it('should return 3 first elements', () => {
  const input = [1, 2, 3, 4, 1, 24, 3];
  const fn = (v) => v === 4;
  expect(takeWhile(input, fn)).toEqual([1, 2, 3]);
});

describe('matchFirst Test', () => {
  const fakeTokens: Token[] = [
    { type: 'STAR', value: '*' },
    { type: 'TEXT', value: 'a ' },
    { type: 'STAR', value: '*' },
    { type: 'EOF', value: '' },
  ];

  const parser1: ParserFunction = () => null;
  const parser2: ParserFunction = (tokens) => ({ value: tokens[2].value, type: 'BOLD', consumed: 3 });

  it('should return Node', () => {
    const input = matchFirst(fakeTokens, parser1, parser2, parser1);
    const expected = { type: 'BOLD', value: '*', consumed: 3 };
    expect(input).toEqual(expected);
  });

  it('should return null', () => {
    expect(matchFirst(fakeTokens, parser1, parser1, parser1)).toEqual(null);
  });
});
