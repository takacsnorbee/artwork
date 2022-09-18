/* eslint-disable @typescript-eslint/promise-function-async */
import { Dispatch, AnyAction } from 'redux';
import { getArtworkDetailsAction } from './actions';
import { startLoaderAction, stopLoaderAction } from '../loader/actions';

export const fetchArtworkDetails =
  (artworkID: number) => async (dispatch: Dispatch<AnyAction>) => {
    dispatch(startLoaderAction());
    const result = await fetch(
      `https://api.artic.edu/api/v1/artworks/${artworkID}`
    )
      .then((res) => res.json())
      .catch((error) => {
        throw new Error(error);
      });
    dispatch(stopLoaderAction());
    dispatch(getArtworkDetailsAction(result.data));
  };
