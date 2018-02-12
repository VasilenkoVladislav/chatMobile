import { put, call } from 'redux-saga/effects';
import { authTokenFormat } from '../../default/tokenFormat';
import { setItemAsyncStorage } from './asyncStorageSaga';
import { updateHeaders } from '../actions/entities/headersActions';

export function * updateHeadersClient (headers) {
    if (headers && headers['access-token'] && headers['client'] && headers['uid']) {
        headers = authTokenFormat(headers);
        yield call(setItemAsyncStorage, 'authHeaders', headers);
        yield put(updateHeaders(headers));
    }
}
