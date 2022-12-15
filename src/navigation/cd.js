import * as path from 'path';
import { access } from "fs/promises";
import { color } from '../constants.js';

export const changeDir = async (currentPath, value) => {

  const newPath = path.resolve(currentPath, value);

  try {
    await access(newPath);
    return newPath;
  } catch (error) {
    process.stdout.write(`${color.red}Operation failed${color.white}\n`);
    return currentPath;
  }
};
