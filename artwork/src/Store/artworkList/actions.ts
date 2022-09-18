import { GET_ARTWORK_LIST } from './types';
import { ArtworkListI } from './reducer';

export interface ArtworkListActionI {
  type: typeof GET_ARTWORK_LIST;
  payload: ArtworkListI;
}

export const getArtworkListAction = (
  payload: ArtworkListI
): ArtworkListActionI => ({
  type: GET_ARTWORK_LIST,
  payload,
});
