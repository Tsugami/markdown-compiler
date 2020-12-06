import { parser } from './src/Parser';
import { tokenize } from './src/tokenizer/Tokenizer';
import { matchStar } from './src/Util';
import sentenceParser from './src/parsers/sentenceParser';

const tokens = tokenize('__Foo__ and *bar*.\n\nAnother paragraph.');
const result = parser(tokens);
console.log('resultado', result);

// const tokens = tokenize('Foo');
// const result = parser(tokens);
// console.log('resultado', result);

// console.log('resultado', matchStar(tokens, sentenceParser));
