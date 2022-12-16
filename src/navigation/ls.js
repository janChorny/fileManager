import * as fs from 'fs/promises';
import { color } from '../constants.js';

export const listFiles = async (path) => {
  try {
    const files = await fs.readdir(path, { withFileTypes: true });
    let _files = [];
    let directories = [];
    let result = [];
    for (let file of files) {
      if (file.isFile()) {
        _files.push({ Name: file.name, Type: 'file' });
      } else {
        directories.push({ Name: file.name, Type: 'directory' });
      }
    }
    _files.sort((a, b) => a.Name.localeCompare(b.Name));
    directories.sort((a, b) => a.Name.localeCompare(b.Name));
    result = directories.concat(_files);
    console.table(result);
  } catch (error) {
    console.log(`${color.red}Operation failed${color.white}\n`);
  }
}


