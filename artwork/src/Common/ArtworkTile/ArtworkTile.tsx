import React from 'react';
import './ArtworkTile.css';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardActionArea from '@mui/material/CardActionArea';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

interface PropsI {
  artworkID: number;
  imgID: number;
  title: string;
}

const ArtworkTile = ({ artworkID, imgID, title }: PropsI): JSX.Element => {
  const navigate = useNavigate();

  const handleClickOnCard = (
    tempArtworkID: number,
    tempImgID: number
  ): void => {
    navigate(`/details/${tempArtworkID}/${tempImgID}`);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea
        onClick={() => {
          handleClickOnCard(artworkID, imgID);
        }}
      >
        <CardMedia
          component='img'
          height='140'
          image={`https://www.artic.edu/iiif/2/${imgID}/full/843,/0/default.jpg`}
          alt='green iguana'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {title}
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

export default ArtworkTile;
