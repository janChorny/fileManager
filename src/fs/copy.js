import * as path from 'path';
import { color } from '../utils/constants.js';
import { createReadStream, createWriteStream } from 'fs';
import { isPathAbsolute } from '../utils/isPathAbsolute.js';

export const copyFiles = async (filePath, value, newFilePath) => {
  try {
    const currentPath = await isPathAbsolute(filePath, value);
    const newCheckedPath = await isPathAbsolute(filePath, newFilePath);
    const newPath = path.join(newCheckedPath, path.basename(currentPath));
    const readStream = createReadStream(currentPath)
    const writeStream = createWriteStream(newPath)

    await new Promise((resolve, reject) => {

      readStream.pipe(writeStream)

      writeStream.on('close', () => {
        console.log(`${color.green}File successfully copied!${color.white}`)
        resolve();
      });
    })
  } catch (error) {
    console.log(`${color.red}Operation failed!${color.white}`);
    console.log(`${color.red}${error.message}${color.white}`);
  }
}
