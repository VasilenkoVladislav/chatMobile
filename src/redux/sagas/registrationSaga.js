import { put, call, takeLatest } from 'redux-saga/effects';
import { registrationSuccess, registrationError } from '../actions/entities/registrationActions';
import api from '../../configApi/apiAuth';
import { REGISTRATION_REQUEST } from '../constansActions';
import { signInSuccess } from '../actions/entities/authenticateActions';
import { updateHeadersClient } from '../sagas/headersSaga';

export function * registration ({payload}) {
    const { data, headers } = yield call(api.registrations.registration, payload);
    if (data && headers) {
        yield put(registrationSuccess());
        yield call(updateHeadersClient, headers);
        yield put(signInSuccess(data));
    } else {
        yield put(registrationError());
    }
}

export function * watchRegistration () {
    yield takeLatest(REGISTRATION_REQUEST, registration);
}

export const registrationSagas = [
    watchRegistration()
];
