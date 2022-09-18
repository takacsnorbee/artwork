/* eslint-disable @typescript-eslint/promise-function-async */
import { Dispatch, AnyAction } from 'redux';
import { getSumOfArtworksAction } from './actions';
import { startLoaderAction, stopLoaderAction } from '../loader/actions';

export const fetchSumOfArtworks =
  () => async (dispatch: Dispatch<AnyAction>) => {
    dispatch(startLoaderAction());
    const result = await fetch(
      'https://api.artic.edu/api/v1/artworks/search?query[term][is_public_domain]=true&limit=25'
    )
      .then((res) => res.json())
      .catch((error) => {
        throw new Error(error);
      });
    console.log(result);
    dispatch(stopLoaderAction());
    dispatch(getSumOfArtworksAction(result.pagination.total_pages));
  };
