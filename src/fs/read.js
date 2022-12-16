import * as path from 'path';
import { createReadStream } from 'fs';
import { stdout } from 'process';
import { color } from '../constants.js';

export const read = async (filePath, value) => {
  try {
    const readPath = path.join(filePath, value);
    const readStream = createReadStream(readPath, 'utf-8');
    readStream.on('data', (chunk) => stdout.write(chunk));
  } catch (error) {
    process.stdout.write(`${color.red}Operation failed${color.white}\n`);
  }
};
