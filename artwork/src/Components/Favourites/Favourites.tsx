import './Favourites.css';
import React, { FC, useEffect, useState } from 'react';
import List from '@mui/material/List';
import Button from '@mui/material/Button';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getFavourites } from '../../Store/selectors';
import { fetchArtworksService } from '../../helper/service';
import { FavouritesTile } from '../../Common/FavouritesTile/FavouritesTile';
import { useAppDispatch } from '../../hooks';
import {
  startLoaderAction,
  stopLoaderAction,
} from '../../Store/loader/actions';
import { removeFavouriteAction } from '../../Store/favourites/actions';

const Favourites: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const favourites = useSelector(getFavourites);
  const [favouriteArtworks, setFavouriteArtworks]: any = useState([]);

  const fetchArtwork = async (IDs: number[]): Promise<any> => {
    dispatch(startLoaderAction());
    for (const id of IDs) {
      const data = await fetchArtworksService(+id);
      setFavouriteArtworks((prev: any[]) => [...prev, data.data]);
    }
    dispatch(stopLoaderAction());
  };

  useEffect((): void => {
    if (favouriteArtworks.length === 0) {
      void fetchArtwork(favourites);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const deleteFromFavouriteList = (artworkID: number): void => {
    setFavouriteArtworks(
      favouriteArtworks.filter((artwork: any) => {
        return artwork.id !== artworkID;
      })
    );
    void dispatch(removeFavouriteAction(artworkID));
  };

  return (
    <>
      <div className='favourite-btn-wrapper'>
        <Button variant='contained' onClick={() => navigate('/artwork')}>
          Home
        </Button>
      </div>
      <List>
        {favouriteArtworks.map((artwork: any) => {
          return (
            <FavouritesTile
              key={artwork.id}
              artworkData={artwork}
              deleteFromFavouriteList={deleteFromFavouriteList}
            />
          );
        })}
      </List>
    </>
  );
};

export default Favourites;
