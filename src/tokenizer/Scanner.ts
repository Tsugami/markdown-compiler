import { ScannerFunction, TokenType } from '../types';

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
  const text = plainMarkdown
    .split('')
    .filter((char) => !TOKEN_TYPES[char])
    .join('');

  if (!text) {
    return null;
  }

  return { type: 'TEXT', value: text };
};
