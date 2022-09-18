import { combineReducers } from 'redux';
import { artworksListReducer } from './artworkList/reducer';
import { favouriteReducer } from './favourites/reducer';
import { loaderReducer } from './loader/reducer';
import { sumOfArtworksReducer } from './sumOfArtworks/reducer';

const rootReducer = combineReducers({
  loader: loaderReducer,
  favourites: favouriteReducer,
  sumOfArtworks: sumOfArtworksReducer,
  artworkList: artworksListReducer,
});

export default rootReducer;
