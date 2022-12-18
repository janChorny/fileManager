import { createUnzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
import * as path from 'path';
import { color } from '../constants.js';

export const decompressFile = async (filePath, value, pathToDestination) => {
  try {
    const currentPath = path.join(filePath, value);
    const decompressedFileName = path.basename(currentPath).split('.').slice(0,-1).join('.');
    const newPath = path.join(pathToDestination, decompressedFileName);
    const unzip = createUnzip();
    const inp = createReadStream(currentPath);
    const out = createWriteStream(newPath);
    inp.pipe(unzip).pipe(out);
    console.log(`${color.green}File successfully decompressed${color.white}\n`)
  } catch (error) {
    console.log(`${color.red}Operation failed${color.white}\n`);
  }
};
