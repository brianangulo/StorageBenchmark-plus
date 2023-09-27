import {getItemAsync, setItemAsync, deleteItemAsync} from 'expo-secure-store';
import {test64kbJSON} from '../../64KB';

const key = 'k';

deleteItemAsync(key);
setItemAsync(key, JSON.stringify(test64kbJSON));

export async function getFromExpoSecureStorage(): Promise<string | null> {
  return getItemAsync(key);
}
