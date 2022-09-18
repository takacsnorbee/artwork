import { RootState } from '.';

export const getLoaderState = (state: RootState): boolean => state.loader;
export const getFavourites = (state: RootState): number[] => state.favourites;
export const getArtworkDetails = (state: RootState): any =>
  state.artworkDetails;
export const getTotalPages = (state: RootState): number =>
  state.artworkList.totalPages;
export const getTotalArtworks = (state: RootState): number =>
  state.artworkList.total;
export const getLimit = (state: RootState): number => state.artworkList.limit;
export const getCurrentPage = (state: RootState): number =>
  state.artworkList.currentPage;
export const getArtworkList = (state: RootState): any =>
  state.artworkList.artworks;
