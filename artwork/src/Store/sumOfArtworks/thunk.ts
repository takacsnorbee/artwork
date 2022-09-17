/* eslint-disable @typescript-eslint/promise-function-async */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Dispatch, AnyAction } from 'redux';
import { getSumOfArtworksAction } from './actions';

export const fetchSumOfArtworks =
  () => async (dispatch: Dispatch<AnyAction>) => {
    const result = await fetch(
      'https://api.artic.edu/api/v1/artworks/search?query[term][is_public_domain]=true&limit=0'
    )
      .then((res) => res.json())
      .catch((error) => console.log(error));

    console.log(result);
    // dispatch(getSumOfArtworksAction(result.pagination.total));
  };
