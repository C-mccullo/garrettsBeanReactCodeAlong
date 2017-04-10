import * as types from './types';

export function updateSearch(value) {
	return {
		type: types.UPDATE_SEARCH,
		payload: {
			value,
		}
	}
}

export function setBeers(beers) {
	return {
		type: types.SET_BEERS ,
		payload: {
			beers,
		}
	}
}

export function isFetching() {
	return {
		type: types.IS_FETCHING,
		payload: {

		}
	}
}

export function getBeers(query) {
	const url = query && query.length ? 
		`https://api.punkapi.com/v2/beers?per_page=24&beer_name=${query}`
		: 
		`https://api.punkapi.com/v2/beers?per_page=24`;

	return dispatch => {
		dispatch(isFetching());
		return fetch(url, {
      method: 'GET',
    })
    .then(res => res.json())
    .then(data => {
			dispatch(setBeers(data));
    });
	}	
}