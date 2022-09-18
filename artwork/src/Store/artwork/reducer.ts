import { GET_ARTWORK_DETAILS } from './types';
import { ArtworkActionI } from './actions';

export interface ArtworkDetailsI {
  artworkData: {};
}

const initialArtwork: ArtworkDetailsI = {
  artworkData: {},
};

export const artworkDetailsReducer = (
  state = initialArtwork,
  action: ArtworkActionI
): ArtworkDetailsI => {
  switch (action.type) {
    case GET_ARTWORK_DETAILS:
      console.log(action.payload);
      return action.payload;
    default:
      return state;
  }
};
