import { CLEAR_DETAILS, SET_LOADING } from './details-actions';
import { SET_ERROR } from './details-actions';
import { SET_COUNTRY } from './details-actions';

const initialState = {
	currentCountry: null,
	status: 'idle',
	error: null
}

export const detailsReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case SET_LOADING:
			return {
				...state,
				error: null,
				status: 'loading'
			}
		case SET_ERROR:
			return {
				...state,
				status: 'rejected',
				error: payload
			}
		case SET_COUNTRY:
			return {
				...state,
				status: 'received',
				currentCountry: payload
			}
		case CLEAR_DETAILS:
			return initialState;
		default:
			return state;
	}
}