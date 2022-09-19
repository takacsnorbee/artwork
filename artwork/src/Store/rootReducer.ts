import { combineReducers } from 'redux';
import { artworksListReducer } from './artworkList/reducer';
import { favouriteReducer } from './favourites/reducer';
import { loaderReducer } from './loader/reducer';
import { artworkDetailsReducer } from './artwork/reducer';

const rootReducer = combineReducers({
  loader: loaderReducer,
  favourites: favouriteReducer,
  artworkDetails: artworkDetailsReducer,
  artworkList: artworksListReducer,
});

export default rootReducer;
