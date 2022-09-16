import { combineReducers } from 'redux';
import { favouriteReducer } from './favourites/reducer';
import { loaderReducer } from './loader/reducer';

const rootReducer = combineReducers({
  loader: loaderReducer,
  favourites: favouriteReducer,
});

export default rootReducer;
