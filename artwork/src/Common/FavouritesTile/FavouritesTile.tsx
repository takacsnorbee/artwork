import React from 'react';
import DeleteForeverSharpIcon from '@mui/icons-material/DeleteForeverSharp';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import Button from '@mui/material/Button';
import { useAppDispatch } from '../../hooks';
import { removeFavouriteAction } from '../../Store/favourites/actions';
import { useNavigate } from 'react-router-dom';
import './FavouritesTile.css';

interface Props {
  artworkData: any;
}

export const FavouritesTile = ({ artworkData }: Props): JSX.Element => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const deleteFromFavouriteList = (artworkID: number): void => {
    void dispatch(removeFavouriteAction(artworkID));
  };

  return (
    <ListItem className='favourites-list-item'>
      <ListItemButton
        className='favourites-list-item-btn'
        onClick={() =>
          navigate(
            `/details/${artworkData.id as string}/${
              artworkData.image_id as string
            }`
          )
        }
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
