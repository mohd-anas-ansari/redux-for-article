import { ADD_COUNT, REMOVE_COUNT } from "../type";

const initialState = {
	count: 0,
};

export function countReducer(state = initialState, action) {
	switch (action.type) {
		case ADD_COUNT:
			console.log(state, "inside counter-reducer");
			return {
				count: state.count + 1,
			};
		
		case REMOVE_COUNT:
			return {
				count: state.count - 1,
			}

		default:
			return state;
	}
}
