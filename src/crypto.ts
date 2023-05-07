import * as crypto from 'node:crypto';

export function stringToHashMd5Hex(str: string): string {
  return crypto.createHash('md5').update(str).digest('hex');
}
