import * as path from 'path';

export const goUp = (previousPath) => {
  const currentPath = previousPath.split(path.sep);
  currentPath.pop();
  if (currentPath.length === 1) {
    return `${currentPath[0]}${path.sep}`;
  } else {
    return currentPath.join(path.sep);
  }
}
