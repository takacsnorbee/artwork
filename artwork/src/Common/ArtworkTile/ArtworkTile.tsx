import React from 'react';
import './ArtworkTile.css';
import StarBorderPurple500SharpIcon from '@mui/icons-material/StarBorderPurple500Sharp';
import StarPurple500SharpIcon from '@mui/icons-material/StarPurple500Sharp';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardActionArea from '@mui/material/CardActionArea';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import {
  removeFavouriteAction,
  addFavouriteAction,
} from '../../Store/favourites/actions';

interface PropsI {
  artworkID: number;
  imgID: number;
  title: string;
  favourite: boolean;
}

const ArtworkTile = ({
  artworkID,
  imgID,
  title,
  favourite,
}: PropsI): JSX.Element => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleFavouriteBtn = (): void => {
    if (favourite) {
      void dispatch(removeFavouriteAction(artworkID));
    } else {
      void dispatch(addFavouriteAction(artworkID));
    }
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea
        onClick={() => {
          navigate(`/details/${artworkID}/${imgID}`);
        }}
      >
        <CardMedia
          component='img'
          height='140'
          image={`https://www.artic.edu/iiif/2/${imgID}/full/843,/0/default.jpg`}
          alt={title}
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <CardActionArea
          onClick={handleFavouriteBtn}
          className='star-action-area'
        >
          {favourite ? (
            <StarPurple500SharpIcon />
          ) : (
            <StarBorderPurple500SharpIcon />
          )}
        </CardActionArea>
      </CardActions>
    </Card>
  );
};

export default ArtworkTile;
