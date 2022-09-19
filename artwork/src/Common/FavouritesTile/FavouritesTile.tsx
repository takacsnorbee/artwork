import React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import Button from '@mui/material/Button';
import { useAppDispatch } from '../../hooks';
import { removeFavouriteAction } from '../../Store/favourites/actions';
import { useNavigate } from 'react-router-dom';
import './FavouritesTile.css';
import DeleteForeverSharpIcon from '@mui/icons-material/DeleteForeverSharp';

interface Props {
  artworkData: any;
}

export const FavouritesTile = ({ artworkData }: Props): JSX.Element => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const goToDetails = (artworkID: number, imgID: number): void => {
    navigate(`/details/${artworkID}/${imgID}`);
  };

  const deleteFromFavouriteList = (artworkID: number): void => {
    void dispatch(removeFavouriteAction(artworkID));
  };

  return (
    <ListItem className='favourites-list-item'>
      <ListItemButton
        className='favourites-list-item-btn'
        onClick={() => goToDetails(artworkData.id, artworkData.image_id)}
      >
        <ListItemText primary={artworkData.title} />
        <ListItemText primary={artworkData.artist_title} />
        <ListItemText primary={artworkData.date_display} />
      </ListItemButton>
      <Button
        className='favourites-list-item-del-btn'
        size='small'
        color='primary'
        onClick={() => deleteFromFavouriteList(artworkData.id)}
        startIcon={
          <DeleteForeverSharpIcon className='favourites-list-item-del-icon' />
        }
      ></Button>
    </ListItem>
  );
};
