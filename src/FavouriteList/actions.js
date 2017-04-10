import * as types from './types';

export function addFavourite(beer) {
	return {
		type: types.ADD_FAVOURITE,
		payload: {
			beer
		}
	}
}

export function removeFavourite(beer) {
	return {
		type: types.REMOVE_FAVOURITE,
		payload: {
			beer
		}
	}
}