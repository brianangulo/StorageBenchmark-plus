import {resetGenericPassword, setGenericPassword, getGenericPassword} from 'react-native-keychain';
import {test64kbJSON} from '../../64KB';

const key = 'k';

resetGenericPassword()
setGenericPassword(key, JSON.stringify(test64kbJSON));

export async function getFromReactNativeKeychain(): Promise<string | undefined> {
    const result = await getGenericPassword()
    if (result) return result.password;
    return undefined;
}
