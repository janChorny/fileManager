import { createReadStream, createWriteStream } from 'fs';
import * as path from 'path';
import { color } from '../utils/constants.js';
import { isPathAbsolute } from '../utils/isPathAbsolute.js';
import * as zlib from 'zlib';

export const decompressFile = async (filePath, value, pathToDestination) => {
  try {
    const currentPath = await isPathAbsolute(filePath, value);
    const decompressedFileName = path.basename(currentPath).split('.').slice(0, -1).join('.');
    const newCheckedPath = await isPathAbsolute(filePath, pathToDestination);
    const newPath = path.join(newCheckedPath, decompressedFileName);
    const unzip = zlib.createBrotliDecompress();
    const inp = createReadStream(currentPath);
    const out = createWriteStream(newPath);
    inp.pipe(unzip).pipe(out);
    console.log(`${color.green}File successfully decompressed!${color.white}`)
  } catch (error) {
    console.log(`${color.red}Operation failed!${color.white}`);
  }
};
