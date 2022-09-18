import { START_LOADER, STOP_LOADER } from './types';
import { loaderActionType } from './actions';

const initialLoaderState = false;

export const loaderReducer = (
  state = initialLoaderState,
  action: loaderActionType
): boolean => {
  switch (action.type) {
    case START_LOADER:
      return true;
    case STOP_LOADER:
      return false;
    default:
      return state;
  }
};
