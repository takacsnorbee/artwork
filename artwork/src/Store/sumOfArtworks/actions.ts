import { GET_SUM_OF_ARTWORKS } from './types';

export interface getSumOfArtworksI {
  type: typeof GET_SUM_OF_ARTWORKS;
  payload: number; // fixme any
}

export const getSumOfArtworksAction = (payload: number): getSumOfArtworksI => ({
  type: GET_SUM_OF_ARTWORKS,
  payload,
});
