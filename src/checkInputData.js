export const checkInputData = (str) => {
  const [command, value, newValue ] = str.split(' ').map(e => e.trim());
  return [command, value, newValue];
}
