import { color } from './constants.js';
import { getUserName } from './getUserName.js';
import { homedir } from 'os';
import { checkInputData } from './checkInputData.js';
import { stopProcess } from './utils/stopProcess.js';
import { goUp } from './navigation/up.js';
import { changeDir } from './navigation/cd.js';
import { listFiles } from './navigation/ls.js';
import { read } from './fs/read.js';
import { create } from './fs/create.js'

const fileManager = async() => {
  const userName = getUserName();
  let workingDir = homedir();

  const greetingMessage = `${color.green}Welcome to the File Manager, ${color.cyan}${userName}!\n`;
  const directoryMessage = `${color.cyan}You are currently in ${color.yellow}${workingDir}${color.white}.\n`;
  const goodbyeMessage = `${color.green}Thank you for using File Manager, ${color.cyan}${userName}, ${color.green}goodbye!\n`;
  
  process.stdout.write(greetingMessage);
  process.stdout.write(directoryMessage);

  process.stdin.on('data', async (data) => {
    try {
      const inputTostring = data.toString().trim();
      const [command, value] = checkInputData(inputTostring);
    
      switch (command) {
        case '.exit':
          stopProcess(goodbyeMessage);
          break;
        case 'up':
          workingDir = goUp(workingDir);
          break;
        case 'cd':
          workingDir = await changeDir(workingDir, value);
          break;
        case 'ls':
          await listFiles(workingDir);
          break;
        case 'cat':
          await read(workingDir, value);
          break;
        case 'add':
          await create(workingDir, value);
          break;
        default:
          process.stdout.write('Invalid input\n');
          break;
      }
    } catch (error) {
      process.stdout.write(`${color.red}Operation failed${color.white}\n`);
      console.log(error.message);
    } finally {
      process.stdout.write(`${color.cyan}You are currently in ${color.yellow}${workingDir}${color.white}.\n`);
    }
  })
};

fileManager();

