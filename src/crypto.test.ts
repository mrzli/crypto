import { describe, expect, it } from '@jest/globals';
import { hashMd5Hex } from './crypto';

describe('crypto', () => {
  describe('hashMd5Hex()', () => {
    interface Example {
      readonly input: string | Buffer;
      readonly expected: string;
    }

    const EXAMPLES: readonly Example[] = [
      {
        input: '',
        expected: 'd41d8cd98f00b204e9800998ecf8427e',
      },
      {
        input: 'The quick brown fox jumps over 13 lazy dogs.',
        expected: '6363fe744f74ee8f280958ab2f185dde',
      },
      {
        input: 'some value',
        expected: '5946210c9e93ae37891dfe96c3e39614',
      },
      {
        input: Buffer.from('736f6d652076616c7565', 'hex'), // 'some value' as binary data
        expected: '5946210c9e93ae37891dfe96c3e39614',
      },
    ];

    for (const example of EXAMPLES) {
      it(JSON.stringify(example), () => {
        const actual = hashMd5Hex(example.input);
        expect(actual).toEqual(example.expected);
      });
    }
  });
});
