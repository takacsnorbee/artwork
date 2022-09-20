import { startLoaderAction, stopLoaderAction } from '../loader/actions';
import { loaderReducer } from '../loader/reducer';
import { favouriteReducer } from '../favourites/reducer';
import {
  addFavouriteAction,
  removeFavouriteAction,
} from '../favourites/actions';

describe('Reducers tests', () => {
  test('StartLoader', () => {
    expect(loaderReducer(undefined, startLoaderAction())).toEqual(true);
  });
  test('StopLoader', () => {
    expect(loaderReducer(undefined, stopLoaderAction())).toEqual(false);
  });
  test('Remove favourite', () => {
    expect(favouriteReducer(undefined, removeFavouriteAction(16487))).toEqual(
      []
    );
  });
  test('Add favourite', () => {
    expect(favouriteReducer(undefined, addFavouriteAction(1000))).toEqual([
      16487, 1000,
    ]);
  });
});
