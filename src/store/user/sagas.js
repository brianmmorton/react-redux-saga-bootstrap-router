/* @flow */

import { delay } from 'redux-saga'
import { all, call, put, takeLatest, takeEvery } from 'redux-saga/effects'
import request from '../../utils/request'
import {
  FETCH,
  FETCH_SUCCESS,
  // FETCH_FAIL,
  UPDATE,
  UPDATE_SUCCESS,
  UPDATE_FAIL,
  LOGIN,
  LOGIN_SUCCESS,
} from './actions'

function* fetch ({ data, }) {
  yield call(delay, 1500);
  yield put({ type: FETCH_SUCCESS, response: null, });

  /*
    try {
      const { data } = yield call(request.get, '/users', config);
      yield put({ type: FETCH_SUCCESS, response: data, });
    }
    catch (e) {
      console.log(e);
      yield put({ type: FETCH_FAIL, response: null, error: e.message });
    }
  */
}

function* login ({ data }) {
  yield call(delay, 1500);
  yield put({ type: LOGIN_SUCCESS, response: data, });

  /*
    try {
      const { data } = yield call(request.get, '/users', config);
      yield put({ type: FETCH_SUCCESS, response: data, });
    }
    catch (e) {
      console.log(e);
      yield put({ type: FETCH_FAIL, response: null, error: e.message });
    }
  */
}

function* update ({ data }) {
  try {
    const res = yield call(request.put, '/users', data);
    yield put({ type: UPDATE_SUCCESS, response: res.data, });
  }
  catch (e) {
    console.log(e);
    yield put({ type: UPDATE_FAIL, response: null, error: e.message });
  }
}


export default function* root () {
  yield all([
    takeLatest(FETCH, fetch),
    takeEvery(UPDATE, update),
    takeLatest(LOGIN, login),
  ]);
}
