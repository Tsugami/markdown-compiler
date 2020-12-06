import { parser } from '../Parser';
import { tokenize } from '../tokenizer/Tokenizer';

it('should return 12 consumed with 2 paragraphs', () => {
  const tokens = tokenize('__Foo__ and *bar*.\n\nAnother paragraph.');
  const parsed = parser(tokens);
  expect(parsed.consumed).toBe(14);
  expect(parsed.paragraphs.length).toBe(2);
});

it('should return 2 consumed (TEXT, EOF)', () => {
  const tokens = tokenize('Foo');
  const parsed = parser(tokens);
  expect(parsed.consumed).toBe(2);
});
