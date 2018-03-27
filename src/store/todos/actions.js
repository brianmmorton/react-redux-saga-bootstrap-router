export const FETCH = 'todos/FETCH';
export const FETCH_SUCCESS = 'todos/FETCH_SUCCESS';
export const FETCH_FAIL = 'todos/FETCH_FAIL';

export const ADD = 'todos/ADD';
export const ADD_SUCCESS = 'todos/ADD_SUCCESS';
export const ADD_FAIL = 'todos/ADD_FAIL';

export const UPDATE = 'todos/UPDATE';
export const UPDATE_SUCCESS = 'todos/UPDATE_SUCCESS';
export const UPDATE_FAIL = 'todos/UPDATE_FAIL';

export const DELETE = 'todos/DELETE';
export const DELETE_SUCCESS = 'todos/DELETE_SUCCESS';
export const DELETE_FAIL = 'todos/DELETE_FAIL';

export function fetch (params) {
  return { type: FETCH, params, }
}

export function add (data) {
  return { type: ADD, data, }
}

export function update (data) {
  return { type: UPDATE, data, }
}

export function remove (todo_id) {
  return { type: DELETE, todo_id, }
}
