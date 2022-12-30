import { color } from '../utils/constants.js';
import { isPathAbsolute } from '../utils/isPathAbsolute.js';
import { access } from "fs/promises";

export const changeDir = async (currentPath, value) => {

  const newPath = await isPathAbsolute(currentPath, value);
  try {
    await access(newPath);
    return newPath;
  } catch (error) {
    console.log(`${color.red}Operation failed${color.white}`);
    return currentPath;
  }
};
