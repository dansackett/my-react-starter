import { delay } from 'redux-saga';
import { take, takeEvery, put, call, fork } from 'redux-saga/effects';

import * as example_actions from 'Actions/example';

export function* incrementAsync() {
  yield put({type: example_actions.INCREMENT_ASYNC_REQUEST});
  yield call(delay, 1000);
  yield put({type: example_actions.INCREMENT});
  yield put({type: example_actions.INCREMENT_ASYNC_DONE});
}

export function* watchIncrement() {
  yield take(example_actions.INCREMENT, example_actions.increment);
}

export function* watchIncrementAsync() {
  yield takeEvery(example_actions.INCREMENT_ASYNC, incrementAsync);
}

export default function* root() {
  yield [
    fork(watchIncrement),
    fork(watchIncrementAsync)
  ];
}
