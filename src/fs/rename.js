import * as path from 'path';
import { rename } from 'fs/promises';
import { color } from '../constants.js';

export const renameFile = async (filePath, value, newFileName) => {
  try {
    const currentPath = path.join(filePath, value);
    const newPath = path.join(path.dirname(currentPath), newFileName);
    await rename(currentPath, newPath);
    console.log(`${color.green}File successfully renamed to ${newFileName}!${color.white}\n`)
  } catch (err) {
    console.log(`${color.red}Operation failed${color.white}\n`);
  }
}
