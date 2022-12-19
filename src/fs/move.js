import * as path from 'path';
import { color } from '../utils/constants.js';
import { createReadStream, createWriteStream } from 'fs';
import { rm } from 'fs/promises';
import { isPathAbsolute } from '../utils/isPathAbsolute.js';

export const moveFile = async (filePath, value, newFilePath) => {
  try {
    const currentPath = await isPathAbsolute(filePath, value);
    const newPath = path.join(newFilePath, path.basename(currentPath));
    const readStream = createReadStream(currentPath);
    const writeStream = createWriteStream(newPath);

    await new Promise((resolve, reject) => {

      readStream.pipe(writeStream)

      writeStream.on('close', () => {
        resolve();
      });
    })

    rm(currentPath);
    console.log(`${color.green}File successfully moved!${color.white}`)
  } catch (error) {
    console.log(`${color.red}Operation failed!${color.white}`);
    console.log(`${color.red}${error.message}${color.white}`);
  }
}
