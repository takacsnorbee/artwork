/* eslint-disable @typescript-eslint/promise-function-async */
import { AnyAction, Dispatch } from 'redux';
import { startLoaderAction, stopLoaderAction } from '../loader/actions';
import { getArtworkListAction } from './actions';

export const fetchArtworkList =
  (actualPage: number, itemPerPage: number) =>
  async (dispatch: Dispatch<AnyAction>) => {
    dispatch(startLoaderAction());
    const result = await fetch(
      `https://api.artic.edu/api/v1/artworks?page=${actualPage}&limit=${itemPerPage}`
    )
      .then((res) => res.json())
      .catch((error) => {
        throw new Error(error);
      });
    dispatch(
      getArtworkListAction({
        artworks: result.data,
        currentPage: result.pagination.current_page,
        limit: result.pagination.limit,
        total: result.pagination.total,
        totalPages: result.pagination.total_pages,
      })
    );
    dispatch(stopLoaderAction());
  };

export const fetchFilteredArtwokList =
  (actualPage: number, itemPerPage: number, query: string) =>
  async (dispatch: Dispatch<AnyAction>) => {
    dispatch(startLoaderAction());
    const artworksCollector: any[] = [];
    const result = await fetch(
      `https://api.artic.edu/api/v1/artworks/search?q=${query}/?page=${actualPage}&limit=${itemPerPage}`
    )
      .then((res) => res.json())
      .catch((error) => {
        throw new Error(error);
      });
    for (const obj of result.data) {
      artworksCollector.push(
        await fetch(obj.api_link).then((res) => res.json())
      );
    }
    dispatch(
      getArtworkListAction({
        artworks: artworksCollector.map((e) => e.data),
        currentPage: result.pagination.current_page,
        limit: result.pagination.limit,
        total: result.pagination.total,
        totalPages: result.pagination.total_pages,
      })
    );
    dispatch(stopLoaderAction());
  };
