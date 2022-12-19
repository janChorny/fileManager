import { createWriteStream } from 'fs';
import { isPathExist } from '../utils/isPathExist.js';
import { color } from '../constants.js';
import { isPathAbsolute } from '../utils/isPathAbsolute.js';

export const create = async (filePath, value) => {
  try {

    const createPath = await isPathAbsolute(filePath, value);
    const isPath = await isPathExist(createPath);

    if (isPath) {
      console.log(`${color.red}File already exists!${color.white}`);
    } else {
      const writeStream = createWriteStream(createPath);
      writeStream.end();
      console.log(`${color.green}File successfully added!${color.white}`);
    }
  } catch (error) {
    console.log(`${color.red}Operation failed!${color.white}`);
    console.log(`${color.red}${error.message}${color.white}`);
  }
}
