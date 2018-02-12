import { put, call, takeLatest, takeEvery ,select } from 'redux-saga/effects';
import { VALIDATE_TOKEN_REQUEST, SIGN_IN_REQUEST, SIGN_OUT_REQUEST } from '../constansActions';
import { signInSuccess, signInError, signOutSuccess, signOutError } from '../actions/entities/authenticateActions';
import api from '../../configApi/apiAuth';
// import { AsyncStorage } from 'react-native';
import { getHeadersState } from '../selectors/entities/headersSelectors';
import { updateHeadersClient } from './headersSaga';


export function * validateToken () {
    // const authHeaders = JSON.parse(AsyncStorage.getItem('authHeaders'));
    const { data, headers } = yield call(api.authentications.validateToken, '');
    if (data && headers) {
        yield call(updateHeadersClient, headers);
        yield put(signInSuccess(data));
    } else {
        yield put(signInError());
    }
}

export function * signIn ({payload}) {
    const { email, password } = payload;
    const { data, headers } = yield call(api.authentications.signIn, email, password);
    if (data && headers) {
        yield call(updateHeadersClient, headers);
        yield put(signInSuccess(data));
    } else {
        yield put(signInError());
    }
}

export function * signOut () {
    const headers = yield select(getHeadersState);
    const { error } = yield call(api.authentications.signOut, headers);
    if (!error) {
        yield put(signOutSuccess());
    } else {
        yield put(signOutError());
    }
}

export function * watchValidateToken () {
    yield takeEvery(VALIDATE_TOKEN_REQUEST, validateToken);
}

export function * watchSignIn () {
    yield takeLatest(SIGN_IN_REQUEST, signIn);
}

export function * watchSignOut () {
    yield takeLatest(SIGN_OUT_REQUEST, signOut);
}

export const authSagas = [
    watchValidateToken(),
    watchSignIn(),
    watchSignOut()
];
