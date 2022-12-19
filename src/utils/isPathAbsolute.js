import * as path from 'path';
import { isAbsolute } from 'path';
import { color } from './constants.js';

export const isPathAbsolute = async (filePath, value) => {
  try {
    if (isAbsolute(value)) {
      return value;
    } else {
      return path.join(filePath, value);
    }
  } catch (error) {
    console.log(`${color.red}${error.message}${color.white}`);
    console.log(`Wrong path is entered. Please, enter like ${color.yellow}C:\Users\User\file.txt${color.white} or just ${color.yellow}file.txt${color.white}`);
  }
}
