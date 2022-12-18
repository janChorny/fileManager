import * as os from 'os';
import { color } from '../constants.js';

export const getOsInfo = async(value) => {
  try {
    switch (value) {
      case '--EOL':
        const eol = JSON.stringify(os.EOL);
        console.log(`${color.green}${eol}${color.white}`)
        break;
      case '--cpus':
        const cpus = os.cpus();
        let cpusTable = [];
        for (let el of cpus) {
          cpusTable.push({ Model: el.model, Clock_rate: `${el.speed * 0.001}GHz` });
        }
        console.table(cpusTable);
        break;
      case '--homedir':
        const homedir = os.homedir();
        console.log(`${color.green}${homedir}${color.white}`)
        break;
      case '--username':
        const username = os.userInfo().username;
        console.log(`${color.green}${username}${color.white}`)
        break;
      case '--architecture':
        const arch = os.arch();
        console.log(`${color.green}${arch}${color.white}`)
        break;

      default:
        console.log(`${color.magenta}Invalid input${color.white}\n`);
        break;
    }
  } catch (error) {
    console.log(`${color.red}Operation failed${color.white}\n`);
  }
}
