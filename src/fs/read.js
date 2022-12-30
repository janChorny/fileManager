import { createReadStream } from 'fs';
import { color } from '../utils/constants.js';
import { isPathAbsolute } from '../utils/isPathAbsolute.js';

export const read = async (filePath, value) => {
  try {
    const readPath = await isPathAbsolute(filePath, value);
    const readStream = createReadStream(readPath, 'utf-8');

    await new Promise((resolve, reject) => {
      readStream.on('data', (data) => {
        console.log(data)
      });
      readStream.on('end', () => {
        resolve();
      });
    });
  } catch (error) {
    console.log(`${color.red}Operation failed!${color.white}`);
    console.log(`${color.red}${error.message}${color.white}`);
  }
};
