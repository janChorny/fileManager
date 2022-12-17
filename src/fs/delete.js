import * as path from 'path';
import { color } from "../constants.js";
import { rm } from 'fs/promises';
import { isPathExist } from '../utils/isPathExist.js';

export const deleteFile = async (filePath, value) => {
  try {
    const currentPath = path.join(filePath, value);
    const isPath = await isPathExist(currentPath);

    if (isPath) {
      rm(currentPath);
      console.log(`${color.green}File successfully deleted${color.white}`)
      } else {
      console.log(`${color.red}No such file exists${color.white}\n`);
      console.log(`${color.red}Operation failed${color.white}\n`);
      }
  } catch (error) {
    console.log(`${color.red}Operation failed${color.white}\n`);
  }
}
