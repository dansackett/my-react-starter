import { INCREMENT, DECREMENT } from 'Constants/example';

function exampleReducer(state={}, action=null) {
	switch(action.type) {
		case INCREMENT:
			return Object.assign({}, state, {count: state.count + 1});
		default:
			return state;
	}
};

export default exampleReducer;
