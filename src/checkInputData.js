export const checkInputData = (str) => {
  const [command, value ] = str.split(' ').map(e => e.trim());
  return [command, value];
}
