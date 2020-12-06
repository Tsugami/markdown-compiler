import { ScannerFunction, TokenType } from '../types';
import { takeWhile } from '../Util';

export const TOKEN_TYPES: Record<string, TokenType> = {
  _: 'UNDERSCORE',
  '*': 'STAR',
  '\n': 'NEWLINE',
};

export const SimpleScanner: ScannerFunction = (plainMarkdown) => {
  const char = plainMarkdown[0];

  if (!TOKEN_TYPES[char]) {
    return null;
  }

  return {
    type: TOKEN_TYPES[char],
    value: char,
  };
};

export const TextScanner: ScannerFunction = (plainMarkdown) => {
  const chars = plainMarkdown.split('');
  const text = takeWhile(chars, (char) => !!TOKEN_TYPES[char]).join('');

  if (!text) {
    return null;
  }

  return { type: 'TEXT', value: text };
};
