import {color} from './constants.js';
import { getUserName } from './getUserName.js';

const fileManager = async() => {
  const userName = getUserName();
  console.log(`${color.green}Welcome to the File Manager, ${color.cyan}${userName}!`)
};

fileManager();
