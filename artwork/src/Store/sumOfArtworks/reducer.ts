import { GET_SUM_OF_ARTWORKS } from './types';
import { getSumOfArtworksType } from './actions';

const initialSumOfArtworks = 0;

export const sumOfArtworksReducer = (
  state = initialSumOfArtworks,
  actions: getSumOfArtworksType
): number => {
  switch (actions.type) {
    case GET_SUM_OF_ARTWORKS:
      return state;
    default:
      return state;
  }
};
