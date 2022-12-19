import * as path from 'path';
import { rename } from 'fs/promises';
import { color } from '../constants.js';
import { isPathAbsolute } from '../utils/isPathAbsolute.js';

export const renameFile = async (filePath, value, newFileName) => {
  try {
    const currentPath = await isPathAbsolute(filePath, value);
    const newPath = path.join(path.dirname(currentPath), newFileName);
    await rename(currentPath, newPath);
    console.log(`${color.green}File successfully renamed!${color.white}\n`)
  } catch (error) {
    console.log(`${color.red}Operation failed!${color.white}`);
    console.log(`${color.red}${error.message}${color.white}`);
  }
}
