import { createGzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
import * as path from 'path';
import { color } from '../constants.js';

export const compressFile = async (filePath, value, pathToDestination) => {
  try {
    const currentPath = path.join(filePath, value);
    const compressedFileName = `${path.basename(currentPath)}.gz`;
    const newPath = path.join(pathToDestination, compressedFileName);
    const gzip = createGzip();
    const inp = createReadStream(currentPath);
    const out = createWriteStream(newPath);
    inp.pipe(gzip).pipe(out);
    console.log(`${color.green}File successfully compressed${color.white}\n`)
  } catch (error) {
    console.log(`${color.red}Operation failed${color.white}\n`);
  }
};

