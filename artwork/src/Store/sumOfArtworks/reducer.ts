import { GET_SUM_OF_ARTWORKS } from './types';
import { SumOfArtworksActionI } from './actions';

const initialSumOfArtworks = 0;

export const sumOfArtworksReducer = (
  state = initialSumOfArtworks,
  action: SumOfArtworksActionI
): number => {
  switch (action.type) {
    case GET_SUM_OF_ARTWORKS:
      return action.payload;
    default:
      return state;
  }
};
