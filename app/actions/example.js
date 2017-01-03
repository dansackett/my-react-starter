export const INCREMENT = 'INCREMENT';
export const INCREMENT_ASYNC = 'INCREMENT_ASYNC';
export const INCREMENT_ASYNC_REQUEST = 'INCREMENT_ASYNC_REQUEST';
export const INCREMENT_ASYNC_DONE = 'INCREMENT_ASYNC_DONE';

export function increment() {
  return { type: INCREMENT };
};

export function incrementAsync() {
  return { type: INCREMENT_ASYNC };
};

export function incrementAsyncRequest() {
  return { type: INCREMENT_ASYNC_REQUEST };
};

export function incrementAsyncDone() {
  return { type: INCREMENT_ASYNC_DONE };
};
