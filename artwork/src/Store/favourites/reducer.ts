import { favouriteActionType } from './actions';
import { ADD_FAVOURITE, REMOVE_FAVOURITE } from './types';

const initialFavouriteState: number[] = [16487];

export const favouriteReducer = (
  state = initialFavouriteState,
  action: favouriteActionType
): typeof initialFavouriteState => {
  switch (action.type) {
    case ADD_FAVOURITE:
      return [...state, action.payload];
    case REMOVE_FAVOURITE:
      return state.filter((id) => id !== action.payload);
    default:
      return state;
  }
};
