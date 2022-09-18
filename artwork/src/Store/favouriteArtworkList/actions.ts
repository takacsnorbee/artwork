import { GET_FAVOURITE } from './types';

export interface favouriteArtworkListActionType {
  type: typeof GET_FAVOURITE;
  payload: any;
}

export const favouriteArtworkListAction = (
  payload: any
): favouriteArtworkListActionType => ({
  type: GET_FAVOURITE,
  payload,
});
