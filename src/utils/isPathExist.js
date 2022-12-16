import { access } from 'fs/promises';

export const isPathExist = async (path) => {
  try {
    await access(path);

    return true;
  } catch {
    return false;
  }
};
