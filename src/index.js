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
import { renameFile } from './fs/rename.js';
import { copyFiles } from './fs/copy.js';
import { moveFile } from './fs/move.js';
import { deleteFile } from './fs/delete.js';
import { getOsInfo } from './os/getOsInfo.js';
import { calculateHash } from './hash/hash.js';
import { compressFile } from './zip/compress.js';
import { decompressFile } from './zip/decompress.js';

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
      const [command, value, newValue] = checkInputData(inputTostring);
    
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
        case 'rn':
          await renameFile(workingDir, value, newValue);
          break;
        case 'cp':
          await copyFiles(workingDir, value, newValue);
          break;
        case 'mv':
          await moveFile(workingDir, value, newValue);
          break;
        case 'rm':
          await deleteFile(workingDir, value);
          break;
        case 'os':
          await getOsInfo(value);
          break;
        case 'hash':
          await calculateHash(workingDir, value);
          break;
        case 'compress':
          await compressFile(workingDir, value, newValue);
          break;
        case 'decompress':
          await decompressFile(workingDir, value, newValue);
          break;
        default:
          process.stdout.write('Invalid input\n');
          break;
      }
    } catch (error) {
      process.stdout.write(`${color.red}Operation failed${color.white}\n`);
    } finally {
      process.stdout.write(`${color.cyan}You are currently in ${color.yellow}${workingDir}${color.white}.\n`);
    }
  })
};

fileManager();

