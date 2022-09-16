import { START_LOADER, STOP_LOADER } from './types';

export type loaderActionType =
  | { type: typeof START_LOADER }
  | { type: typeof STOP_LOADER };

export const startLoaderAction = (): loaderActionType => ({
  type: START_LOADER,
});
export const stopLoaderAction = (): loaderActionType => ({ type: STOP_LOADER });
