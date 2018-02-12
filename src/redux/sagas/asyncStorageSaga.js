import { AsyncStorage } from 'react-native';
import { put } from 'redux-saga/effects';
import { setItemAsyncStorage as action } from '../actions/entities/asyncStorageActions';

export function * setItemAsyncStorage (name, item) {
    yield AsyncStorage.setItem(name, item);
    yield put(action(name));
}

export function * getItemAsyncStorage (name, isParseJson = false) {
    const value = yield AsyncStorage.getItem(name);
    if (isParseJson) {
        try {
            return {result: JSON.parse(value)};
        } catch (e) {
            return { error: e.message }
        }
    } else {
        return { result: value };
    }
}