import * as path from 'path';
import { createHash } from 'node:crypto';
import { readFile } from 'node:fs/promises';
import { color } from '../constants.js';
import { isPathAbsolute } from '../utils/isPathAbsolute.js';

export const calculateHash = async (filePath, value) => {
  try {
    const createPath = await isPathAbsolute(filePath, value)
    const file = await readFile(createPath);
    const res = createHash('sha256').update(file).digest('hex');
    console.log(`${color.green}${res}${color.white}`);
    console.log(`${color.green}Hash successfully created!${color.white}`);
  } catch (error) {
    console.log(`${color.red}Operation failed!${color.white}`);
  }
};
