import React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import Button from '@mui/material/Button';
import { useAppDispatch } from '../../hooks';
import { removeFavouriteAction } from '../../Store/favourites/actions';
import { useNavigate } from 'react-router-dom';

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
    <ListItem>
      <ListItemButton
        onClick={() => goToDetails(artworkData.id, artworkData.image_id)}
      >
        <ListItemText primary={artworkData.title} />
        <ListItemText primary={artworkData.artist_title} />
        <ListItemText primary={artworkData.date_display} />
      </ListItemButton>
      <Button
        size='small'
        color='primary'
        onClick={() => deleteFromFavouriteList(artworkData.id)}
      >
        DEL favourite
      </Button>
    </ListItem>
  );
};
