import './Favourites.css';
import React, { FC, useEffect, useState } from 'react';
import List from '@mui/material/List';
import { useSelector } from 'react-redux';
import { getFavourites } from '../../Store/selectors';
import { fetchArtworksService } from '../../helper/service';
import { FavouritesTile } from '../../Common/FavouritesTile/FavouritesTile';
import { useAppDispatch } from '../../hooks';
import {
  startLoaderAction,
  stopLoaderAction,
} from '../../Store/loader/actions';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const Favourites: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const favourites = useSelector(getFavourites);
  const [favouriteArtworks, setFavouriteArtworks]: any = useState([]);

  const fetchArtwork = async (IDs: any): Promise<any> => {
    dispatch(startLoaderAction());
    for (const id of IDs) {
      const data = await fetchArtworksService(+id);
      setFavouriteArtworks((prev: any[]) => [...prev, data.data]);
    }
    dispatch(stopLoaderAction());
  };

  useEffect((): void => {
    void fetchArtwork(favourites);
  }, []);

  const handleRedirectToHome = (): void => {
    navigate('/artwork');
  };

  return (
    <>
      <Button variant='contained' onClick={handleRedirectToHome}>
        Back
      </Button>
      <List>
        {favouriteArtworks.map((artwork: any) => {
          return <FavouritesTile key={artwork.id} artworkData={artwork} />;
        })}
      </List>
    </>
  );
};

export default Favourites;
