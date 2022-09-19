/* eslint-disable @typescript-eslint/no-non-null-assertion */
import './Details.css';
import React, { FC, useEffect } from 'react';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import { fetchArtworkDetails } from '../../Store/artwork/thunk';
import { useSelector } from 'react-redux';
import { getArtworkDetails, getFavourites } from '../../Store/selectors';
import {
  addFavouriteAction,
  removeFavouriteAction,
} from '../../Store/favourites/actions';
import StarBorderPurple500SharpIcon from '@mui/icons-material/StarBorderPurple500Sharp';
import StarPurple500SharpIcon from '@mui/icons-material/StarPurple500Sharp';
import { DetailsNavBtns } from './DetailsNavBtns/DetailsNavBtns';

const Details: FC = () => {
  const dispatch = useAppDispatch();
  const favourites = useSelector(getFavourites);
  const { artworkID, imgID } = useParams();
  const artworkData = useSelector(getArtworkDetails);

  useEffect((): void => {
    if (typeof artworkID !== 'undefined') {
      void dispatch(fetchArtworkDetails(+artworkID));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [artworkID, imgID]);

  const handleFavouriteBtn = (): void => {
    if (favourites.includes(+artworkID!)) {
      void dispatch(removeFavouriteAction(+artworkID!));
    } else {
      void dispatch(addFavouriteAction(+artworkID!));
    }
  };

  return (
    <section className='details-wrapper'>
      <DetailsNavBtns />
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component='img'
          height='140'
          image={
            typeof imgID !== 'undefined'
              ? `https://www.artic.edu/iiif/2/${imgID}/full/843,/0/default.jpg`
              : ``
          }
          alt={artworkData.title}
        />
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
            {artworkData.artist_title}
          </Typography>
          <Typography gutterBottom variant='h5' component='div'>
            {artworkData.title}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {artworkData.publication_history}
          </Typography>
          <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
            {artworkData.date_display}
          </Typography>
        </CardContent>
        <CardActionArea
          onClick={handleFavouriteBtn}
          className='star-action-area details-star-action-area'
        >
          {favourites.includes(+artworkID!) ? (
            <StarPurple500SharpIcon />
          ) : (
            <StarBorderPurple500SharpIcon />
          )}
        </CardActionArea>
      </Card>
    </section>
  );
};

export default Details;
