import { GET_SUM_OF_ARTWORKS } from './types';

export interface SumOfArtworksActionI {
  type: typeof GET_SUM_OF_ARTWORKS;
  payload: number;
}

export const getSumOfArtworksAction = (
  payload: number
): SumOfArtworksActionI => ({
  type: GET_SUM_OF_ARTWORKS,
  payload,
});
