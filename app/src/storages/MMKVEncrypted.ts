import {MMKV} from 'react-native-mmkv';
import {test64kbJSON} from '../../64KB';

const storage = new MMKV({
  id: 'encrypted-mmkv-storage',
  encryptionKey: 'hunter2',
});

storage.clearAll();

const key = 'k';
storage.set(key, JSON.stringify(test64kbJSON));

export function getFromMMKVEncrypted(): string | undefined {
  return storage.getString(key);
}
