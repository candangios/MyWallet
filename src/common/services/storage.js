import SensitiveInfoStorage from 'react-native-sensitive-info';
import { Storage } from '../../common/constants';
import { AsyncStorage } from "react-native"

export function getItem(key) {
    return AsyncStorage.getItem(key)
    // return SensitiveInfoStorage.getItem(key, Storage.CONFIG).then(item => item || '');
}

export function saveItem(key, value) {
   return AsyncStorage.setItem(key,value);
    // return SensitiveInfoStorage.setItem(key, value || '', Storage.CONFIG);
}