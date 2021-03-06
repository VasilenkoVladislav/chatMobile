import { put, call, takeLatest, takeEvery ,select } from 'redux-saga/effects';
import { VALIDATE_TOKEN_REQUEST, SIGN_IN_REQUEST, SIGN_OUT_REQUEST } from '../constansActions';
import { signInSuccess, signInError, signOutSuccess, signOutError, validateTokenError } from '../actions/entities/authenticateActions';
import api from '../../configApi/apiAuth';
import { getItemAsyncStorage } from './asyncStorageSaga';
import { getHeadersState } from '../selectors/entities/headersSelectors';
import { updateHeadersClient } from './headersSaga';
import { delay } from 'redux-saga';
import { replace } from '../actions/nav';


export function * validateToken () {
    const { result } = yield call(getItemAsyncStorage, 'authHeaders', true);
    if (result) {
        const { data, headers } = yield call(api.authentications.validateToken, result);
        if (data && headers) {
            yield call(updateHeadersClient, headers);
            yield put(signInSuccess(data));
            yield put(replace('Main'))
        } else {
            yield put(validateTokenError());
        }
    }
}

export function * signIn ({payload}) {
    yield call(delay, 3000);
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
