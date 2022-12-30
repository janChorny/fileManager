import { createReadStream, createWriteStream } from 'fs';
import * as path from 'path';
import { color } from '../utils/constants.js';
import { isPathAbsolute } from '../utils/isPathAbsolute.js';
import * as zlib from 'zlib';

export const compressFile = async (filePath, value, pathToDestination) => {
  try {
    const currentPath = await isPathAbsolute(filePath, value);
    const compressedFileName = `${path.basename(currentPath)}.gz`;
    const newCheckedPath = await isPathAbsolute(filePath, pathToDestination);
    const newPath = path.join(newCheckedPath, compressedFileName);
    const gzip = zlib.createBrotliCompress();
    const inp = createReadStream(currentPath);
    const out = createWriteStream(newPath);
    inp.pipe(gzip).pipe(out);
    console.log(`${color.green}File successfully compressed!${color.white}`)
  } catch (error) {
    console.log(`${color.red}Operation failed!${color.white}`);
  }
};

