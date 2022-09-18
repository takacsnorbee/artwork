/* eslint-disable @typescript-eslint/promise-function-async */
import { AnyAction, Dispatch } from 'redux';
import { startLoaderAction, stopLoaderAction } from '../loader/actions';
import { favouriteArtworkListAction } from './actions';

export const fetchFavouriteArtwork: any =
  (favouriteID: number) => async (dispatch: Dispatch<AnyAction>) => {
    dispatch(startLoaderAction());
    const result = await fetch(
      `https://api.artic.edu/api/v1/artworks/${favouriteID}`
    )
      .then((res) => res.json())
      .catch((error) => {
        throw new Error(error);
      });
    dispatch(stopLoaderAction());
    dispatch(favouriteArtworkListAction(result.data));
  };
