import {MMKV} from 'react-native-mmkv';
import {test64kbJSON} from '../../64KB';

const storage = new MMKV();

storage.clearAll();

const key = 'k';
storage.set(key, JSON.stringify(test64kbJSON));

export function getFromMMKV(): string | undefined {
  return storage.getString(key);
}
