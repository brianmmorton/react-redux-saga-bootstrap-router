import { all, fork } from 'redux-saga/effects'
import { sagas as todos } from './todos'
import { sagas as user } from './user'

export default function* () {
  yield all([
    fork(user),
    fork(todos),
  ])
}
