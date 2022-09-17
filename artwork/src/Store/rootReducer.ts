import { combineReducers } from 'redux';
import { favouriteReducer } from './favourites/reducer';
import { loaderReducer } from './loader/reducer';
import { sumOfArtworksReducer } from './sumOfArtworks/reducer';

const rootReducer = combineReducers({
  loader: loaderReducer,
  favourites: favouriteReducer,
  sumOfArtworks: sumOfArtworksReducer,
});

export default rootReducer;
