import { combineReducers } from 'redux';
import { artworksListReducer } from './artworkList/reducer';
import { favouriteReducer } from './favourites/reducer';
import { loaderReducer } from './loader/reducer';
import { artworkDetailsReducer } from './artwork/reducer';
import { favouriteListReducer } from './favouriteArtworkList/reducer';

const rootReducer = combineReducers({
  loader: loaderReducer,
  favourites: favouriteReducer,
  favouriteList: favouriteListReducer,
  artworkDetails: artworkDetailsReducer,
  artworkList: artworksListReducer,
});

export default rootReducer;
