import { SET_LOADING, SET_COUNTRIES, SET_ERROR } from './countries-actions';

const initialState = {
	status: 'idle', // loading | received | rejected
	error: null,
	list: []
}

export const countriesReducer = (
	state = initialState, { type, payload }
) => {
	switch (type) {
		case SET_LOADING:
			return {
				...state,
				status: 'loading',
				error: null
			}
		case SET_COUNTRIES:
			return {
				...state,
				status: 'received',
				list: payload
			}
		case SET_ERROR:
			return {
				...state,
				status: 'rejected',
				error: payload
			}
		default:
			return state;
	}
}