import { ADD_FAVOURITE, REMOVE_FAVOURITE } from './types';

export type favouriteActionType =
  | { type: typeof ADD_FAVOURITE; payload: number }
  | { type: typeof REMOVE_FAVOURITE; payload: number };

export const addFavouriteAction = (payload: number): favouriteActionType => ({
  type: ADD_FAVOURITE,
  payload,
});

export const removeFavouriteAction = (
  payload: number
): favouriteActionType => ({
  type: ADD_FAVOURITE,
  payload,
});
