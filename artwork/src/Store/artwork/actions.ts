import { GET_ARTWORK_DETAILS } from './types';
import { ArtworkDetailsI } from './reducer';

export interface ArtworkActionI {
  type: typeof GET_ARTWORK_DETAILS;
  payload: ArtworkDetailsI;
}

export const getArtworkDetailsAction = (
  payload: ArtworkDetailsI
): ArtworkActionI => ({
  type: GET_ARTWORK_DETAILS,
  payload,
});
