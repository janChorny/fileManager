import * as path from 'path';
import { createWriteStream } from 'fs';
import { isPathExist } from '../utils/isPathExist.js';
import { color } from '../constants.js';

export const create = async (filePath, value) => {
  try {
    const createPath = path.join(filePath, value);
    const isPath = await isPathExist(createPath);

    if (isPath) {
      console.log(`${color.red}Operation failed${color.white}\n`);
    }

    const writeStream = createWriteStream(createPath);
    writeStream.end();
  } catch (err) {
    console.log(`${color.red}Operation failed${color.white}\n`);
  }
}
