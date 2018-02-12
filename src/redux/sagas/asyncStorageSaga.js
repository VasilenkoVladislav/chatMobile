import { AsyncStorage } from 'react-native';
import { put } from 'redux-saga/effects';
import { setItemAsyncStorage as action } from '../actions/entities/asyncStorageActions';

export function * setItemAsyncStorage (name, item) {
    yield AsyncStorage.setItem(name, item);
    yield put(action(name));
}