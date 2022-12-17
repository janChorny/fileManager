import * as path from 'path';
import { color } from "../constants.js";
import { createReadStream, createWriteStream } from 'fs';

export const copyFiles = async(filePath, value, newFilePath) => {
  try {
    const currentPath = path.join(filePath, value);
    const newPath = path.join(newFilePath, path.basename(currentPath));
    const readStream = createReadStream(currentPath)
    const writeStream = createWriteStream(newPath)

    await new Promise((resolve, reject) => {

      readStream.pipe(writeStream)

      writeStream.on('close', () => {
        console.log(`${color.green}File successfully copied${color.white}`)
        resolve();
        });
    })
  } catch (error) {
    console.log(`${color.red}Operation failed${color.white}\n`);
  }
}
