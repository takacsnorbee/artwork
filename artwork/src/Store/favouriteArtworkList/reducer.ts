import { GET_FAVOURITE } from './types';
import { favouriteArtworkListActionType } from './actions';

// export interface favouriteArtworkListI {
//   favourites: [];
// }

const initialFavouriteListState: any[] = [];

export const favouriteListReducer = (
  state = initialFavouriteListState,
  action: favouriteArtworkListActionType
): any[] => {
  switch (action.type) {
    case GET_FAVOURITE:
      console.log(action.payload);
      return [...state, action.payload];
    default:
      return state;
  }
};
