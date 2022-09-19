import { GET_FAVOURITE } from './types';
import { favouriteArtworkListActionType } from './actions';

const initialFavouriteListState: any[] = [];

export const favouriteListReducer = (
  state = initialFavouriteListState,
  action: favouriteArtworkListActionType
): any[] => {
  switch (action.type) {
    case GET_FAVOURITE:
      return [...state, action.payload];
    default:
      return state;
  }
};
