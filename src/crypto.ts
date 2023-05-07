import * as crypto from 'node:crypto';

export function hashMd5Hex(data: string | Buffer): string {
  return crypto.createHash('md5').update(data).digest('hex');
}
