import { RootState } from '.';

export const getLoaderState = (state: RootState): boolean => state.loader;
export const getFavourites = (state: RootState): number[] => state.favourites;
export const getSumOfArtworks = (state: RootState): any => state.sumOfArtworks;
