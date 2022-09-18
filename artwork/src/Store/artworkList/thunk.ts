/* eslint-disable @typescript-eslint/promise-function-async */
import { AnyAction, Dispatch } from 'redux';
import { startLoaderAction, stopLoaderAction } from '../loader/actions';
import { getArtworkListAction } from './actions';

export const fetchArtworkList =
  (itemPerPage: number) => async (dispatch: Dispatch<AnyAction>) => {
    dispatch(startLoaderAction());
    const result = await fetch(
      `https://api.artic.edu/api/v1/artworks?page=1&limit=${itemPerPage}`
    )
      .then((res) => res.json())
      .catch((error) => {
        throw new Error(error);
      });
    console.log(result);
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
