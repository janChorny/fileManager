import { stopProcess } from '../utils/stopProcess.js';
import { color } from "../utils/constants.js";

export const getUserName = () => {
  const args = process.argv.slice(2);
  const wrongInputMessage = `${color.red}Wrong input value\n${color.cyan}Please, type your name after '=': npm run start -- --username=your_username\n`;

  if (args.length === 0 || !args[0].includes('--username=')) {
    stopProcess(wrongInputMessage);
  }

  const [userNameArg, userName] = args[0].split('=');

  if (!userName) {
    stopProcess(wrongInputMessage);
  }

  return userName;
};
