import { color } from "../utils/constants.js";
import { rm } from 'fs/promises';
import { isPathExist } from '../utils/isPathExist.js';
import { isPathAbsolute } from '../utils/isPathAbsolute.js';

export const deleteFile = async (filePath, value) => {
  try {
    const currentPath = await isPathAbsolute(filePath, value);
    const isPath = await isPathExist(currentPath);

    if (isPath) {
      rm(currentPath);
      console.log(`${color.green}File successfully deleted!${color.white}`)
    } else {
      console.log(`${color.red}Operation failed!${color.white}`);
      console.log(`${color.red}${error.message}${color.white}`);
    }
  } catch (error) {
    console.log(`${color.red}Operation failed!${color.white}`);
    console.log(`${color.red}${error.message}${color.white}`);
  }
}
