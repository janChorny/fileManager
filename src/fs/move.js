import * as path from 'path';
import { color } from "../constants.js";
import { createReadStream, createWriteStream } from 'fs';
import { rm } from 'fs/promises';

export const moveFile = async (filePath, value, newFilePath) => {
  try {
    const currentPath = path.join(filePath, value);
    const newPath = path.join(newFilePath, path.basename(currentPath));
    const readStream = createReadStream(currentPath)
    const writeStream = createWriteStream(newPath)

    await new Promise((resolve, reject) => {

      readStream.pipe(writeStream)

      writeStream.on('close', () => {
        resolve();
      });
    })

    rm(currentPath);
    console.log(`${color.green}File successfully moved${color.white}`)
  } catch (error) {
    console.log(`${color.red}Operation failed${color.white}\n`);
  }
}
