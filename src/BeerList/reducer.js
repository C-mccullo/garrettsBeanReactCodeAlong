import * as types from './types';

const initialState = {
  beerList: [],
  searchValue: "",
  isFetching: true
};

export default function beerListReducer(state = initialState, action) {
  switch(action.type) {
  	case types.UPDATE_SEARCH: {
  		return Object.assign({}, state, {
  			searchValue: action.payload.value,
  		});
  	}

  	case types.SET_BEERS: {
  		return Object.assign({}, state, {
				beerList: action.payload.beers,
				isFetching: false,
  		})
  	}
  	// using spread operator in reducer case
  	case types.IS_FETCHING: {
  		return {
  			...state,
  			isFetching: false
  		}
  	}

    default: {
      return state;
    }
  }
};
