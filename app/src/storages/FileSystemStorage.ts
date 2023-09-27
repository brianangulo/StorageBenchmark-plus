import {writeFile, readFile, unlink, MainBundlePath} from 'react-native-fs';
import {test64kbJSON} from '../../64KB';

const key = 'k';
const path = `${MainBundlePath}/${key}`;

export async function writeToFS(): Promise<void> {
  return writeFile(path, JSON.stringify(test64kbJSON), 'utf8');
}

export async function readFromFS(): Promise<string | null> {
  return readFile(path, 'utf8');
}
