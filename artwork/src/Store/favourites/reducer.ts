import { favouriteActionType } from './actions';
import { ADD_FAVOURITE, REMOVE_FAVOURITE } from './types';

const initialFavouriteState = [0];

export const favouriteReducer = (
  state = initialFavouriteState,
  actions: favouriteActionType
): typeof initialFavouriteState => {
  switch (actions.type) {
    case ADD_FAVOURITE:
      return [...state, actions.payload];
    case REMOVE_FAVOURITE:
      return state.filter((id) => id !== actions.payload);
    default:
      return state;
  }
};
