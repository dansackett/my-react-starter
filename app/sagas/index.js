import { delay } from 'redux-saga';
import { takeEvery, put, call, fork } from 'redux-saga/effects';

import { INCREMENT, INCREMENT_ASYNC } from 'Constants/example';

export function* incrementAsync() {
  yield call(delay, 1000)
  yield put({type: INCREMENT})
}

export function* watchIncrementAsync() {
  yield takeEvery(INCREMENT_ASYNC, incrementAsync)
}

export default function* root() {
  yield [
    fork(watchIncrementAsync)
  ]
}
