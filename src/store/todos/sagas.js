/* @flow */

import { delay, } from 'redux-saga'
import { all, call, put, takeLatest, takeEvery } from 'redux-saga/effects'
import request from '../../utils/request'
import {
  FETCH,
  FETCH_SUCCESS,
  // FETCH_FAIL,
  ADD,
  ADD_SUCCESS,
  ADD_FAIL,
  DELETE,
  DELETE_SUCCESS,
  DELETE_FAIL,
  UPDATE,
  UPDATE_SUCCESS,
  UPDATE_FAIL,
} from './actions'

const todosFixture = [
  {
    id: 1,
    text: 'Make a react starter kit'
  },
  {
    id: 2,
    text: 'Build an awesome app'
  }
]

function* fetch ({ params = {}, }) {
  yield call(delay, 1500);
  yield put({ type: FETCH_SUCCESS, response: todosFixture });

  /*
    try {
      const { data } = yield call(request.get, '/todos', { params, });
      yield put({ type: FETCH_SUCCESS, response: data, });
    }
    catch (e) {
      console.log(e);
      yield put({ type: FETCH_FAIL, response: null, error: e.message });
    }
  */
}

function* add ({ data }) {
  try {
    const res = yield call(request.post, `/todos`, data);
    yield put({ type: ADD_SUCCESS, response: res.data, });
  }
  catch (e) {
    console.log(e);
    yield put({ type: ADD_FAIL, response: null, error: e.message });
  }
}

function* update ({ data }) {
  try {
    const res = yield call(request.put, '/todos', data);
    yield put({ type: UPDATE_SUCCESS, response: res.data, });
  }
  catch (e) {
    console.log(e);
    yield put({ type: UPDATE_FAIL, response: null, error: e.message });
  }
}

function* remove ({ todo_id }) {
  try {
    const res = yield call(request.delete, `/todos/${todo_id}`);
    yield put({ type: DELETE_SUCCESS, response: res.data, todo_id, });
  }
  catch (e) {
    console.log(e);
    yield put({ type: DELETE_FAIL, response: null, error: e.message });
  }
}


export default function* root () {
  yield all([
    takeLatest(FETCH, fetch),
    takeEvery(ADD, add),
    takeEvery(UPDATE, update),
    takeEvery(DELETE, remove),
  ]);
}
