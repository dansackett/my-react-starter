import {
  INCREMENT,
  INCREMENT_ASYNC_REQUEST,
  INCREMENT_ASYNC_DONE
} from 'Actions/example';

function exampleReducer(state={}, action=null) {
	switch(action.type) {
		case INCREMENT:
      return Object.assign({}, state, { count: state.count + 1 });
		case INCREMENT_ASYNC_REQUEST:
      return Object.assign({}, state, { isAsyncLoading: true });
    case INCREMENT_ASYNC_DONE:
      return Object.assign({}, state, { isAsyncLoading: false });
		default:
			return state;
	}
};

export default exampleReducer;
