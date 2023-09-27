import AsyncStorage from '@react-native-async-storage/async-storage';
import {test64kbJSON} from '../../64KB';

const key = 'k';

AsyncStorage.clear();

export async function writeToAsyncStorage(): Promise<void> {
  return AsyncStorage.setItem(key, JSON.stringify(test64kbJSON));
}

export async function getFromAsyncStorage(): Promise<string | null> {
  return AsyncStorage.getItem(key);
}
