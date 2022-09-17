import { GET_SUM_OF_ARTWORKS } from './types';

export interface getSumOfArtworksType {
  type: typeof GET_SUM_OF_ARTWORKS;
  payload: number;
}

export const getSumOfArtworksAction = (
  payload: number
): getSumOfArtworksType => ({
  type: GET_SUM_OF_ARTWORKS,
  payload,
});
