import { combineReducers } from 'redux';

import beerListReducer from './BeerList/reducer';
import favouriteListReducer from './FavouriteList/reducer';
const rootReducer = combineReducers({
  beerListReducer,
  favouriteListReducer
});

export default rootReducer;
