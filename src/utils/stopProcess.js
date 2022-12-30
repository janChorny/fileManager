export const stopProcess = (message) => {
  process.stdout.write(message);
  process.exit();
};
