import { GET_SUM_OF_ARTWORKS } from './types';
import { getSumOfArtworksI } from './actions';

const initialSumOfArtworks = 0;

export const sumOfArtworksReducer = (
  state = initialSumOfArtworks,
  actions: getSumOfArtworksI
): number => {
  switch (actions.type) {
    case GET_SUM_OF_ARTWORKS:
      return state;
    default:
      return state;
  }
};
