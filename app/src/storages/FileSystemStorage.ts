import {
  writeFile,
  readFile,
  MainBundlePath,
  DocumentDirectoryPath,
} from 'react-native-fs';
import {test64kbJSON} from '../../64KB';
import {Platform} from 'react-native';

const key = 'k';
const path = `${
  Platform.OS === 'ios' ? MainBundlePath : DocumentDirectoryPath
}/${key}`;

export async function writeToFS(): Promise<void> {
  return writeFile(path, JSON.stringify(test64kbJSON), 'utf8');
}

export async function readFromFS(): Promise<string | null> {
  return readFile(path, 'utf8');
}
