import { color } from '../constants.js';
import { isPathAbsolute } from '../utils/isPathAbsolute.js';
import { isPathExist } from '../utils/isPathExist.js';

export const changeDir = async (currentPath, value) => {

  const newPath = await isPathAbsolute(currentPath, value);
  const isPath = await isPathExist(value);
  if (isPath) {
    return newPath
  } else {
    console.log(`${color.red}Operation failed${color.white}`);
    return currentPath;
  }
};
