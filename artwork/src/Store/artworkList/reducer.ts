import { GET_ARTWORK_LIST } from './types';
import { ArtworkListActionI } from './actions';

export interface ArtworkListI {
  artworks: any[];
  currentPage: number;
  limit: number;
  total: number;
  totalPages: number;
}

const initialArtworkList: ArtworkListI = {
  artworks: [],
  currentPage: 1,
  limit: 25,
  total: 0,
  totalPages: 0,
};

export const artworksListReducer = (
  state = initialArtworkList,
  action: ArtworkListActionI
): ArtworkListI => {
  switch (action.type) {
    case GET_ARTWORK_LIST:
      return action.payload;
    default:
      return state;
  }
};
