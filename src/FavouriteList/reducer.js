import * as types from './types';

const initialState = {
	favouriteList: [],
};

export default function favouriteListReducer(state = initialState, action) {
	switch (action.type) {
		case types.ADD_FAVOURITE: {
			return {
				favouriteList: [
				...state.favouriteList,
				action.payload.beer
				],
			};
		}

		case types.REMOVE_FAVOURITE: {
			return {
				favouriteList: state.favouriteList.filter(fav => {
					return fav.id !== action.payload.beer.id;
				})
			}
		}
		
		default: {
      return state;
    }
	}
}