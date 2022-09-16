import './Favourites.css';
import React, { FC } from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import Button from '@mui/material/Button';

const Favourites: FC = () => {
  const deleteFromFavouriteList = (): void => {
    console.log('REmove');
  };

  const goToDetails = (): void => {
    console.log('go to details');
  };

  return (
    <List>
      <ListItem>
        <ListItemButton onClick={goToDetails}>
          <ListItemText primary='Trash' />
        </ListItemButton>
        <Button size='small' color='primary' onClick={deleteFromFavouriteList}>
          Set favourit icon
        </Button>
      </ListItem>
    </List>
  );
};

export default Favourites;
