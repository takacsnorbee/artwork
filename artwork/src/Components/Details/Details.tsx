import './Details.css';
import React, { FC, useEffect } from 'react';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardActionArea from '@mui/material/CardActionArea';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useParams } from 'react-router-dom';

const Details: FC = () => {
  const { artworkID, imgID } = useParams();

  useEffect((): void => {
    console.log(artworkID);
    console.log(imgID);
  }, [artworkID, imgID]);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component='img'
          height='140'
          image={
            typeof imgID !== 'undefined'
              ? `https://www.artic.edu/iiif/2/${imgID}/full/843,/0/default.jpg`
              : ``
          }
          alt='green iguana'
        />
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
            Word of the Day
          </Typography>
          <Typography gutterBottom variant='h5' component='div'>
            Lizard
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size='small' color='primary'>
          Set favourit icon
        </Button>
      </CardActions>
    </Card>
  );
};

export default Details;
