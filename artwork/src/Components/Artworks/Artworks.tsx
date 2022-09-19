import './Artworks.css';
import React, { FC, KeyboardEventHandler, useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import ElementNumSelect from '../../Common/ElementNumSelect/ElementNumSelect';
import { SelectChangeEvent } from '@mui/material/Select';
import Pagination from '@mui/material/Pagination';
import ArtworkTile from '../../Common/ArtworkTile/ArtworkTile';
import { useAppDispatch } from '../../hooks';
import { useSelector } from 'react-redux';
import {
  getArtworkList,
  getFavourites,
  getTotalPages,
} from '../../Store/selectors';
import {
  fetchArtworkList,
  fetchFilteredArtwokList,
} from '../../Store/artworkList/thunk';
import { useNavigate } from 'react-router-dom';

const Artworks: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const totalPages = useSelector(getTotalPages);
  const favourites = useSelector(getFavourites);
  const artworks = useSelector(getArtworkList);
  const [pageNO, setPageNO] = useState(1);
  const [artworkPerPage, setArtworkPerPage] = useState(25);
  const [searchArtworkValue, setSearchArtworkValue] = useState('');

  useEffect(() => {
    void dispatch(fetchArtworkList(1, artworkPerPage));
  }, []);

  const handleSearchBtn = (): void => {
    if (searchArtworkValue.length > 3) {
      setPageNO(1);
      void dispatch(
        fetchFilteredArtwokList(1, artworkPerPage, searchArtworkValue)
      );
      setSearchArtworkValue('');
    }
  };

  const handleElementNumSelect = (event: SelectChangeEvent): void => {
    setPageNO(1);
    setArtworkPerPage(+event.target.value);
    void dispatch(fetchArtworkList(1, +event.target.value));
  };

  const handleSearchInput = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setSearchArtworkValue(event.target.value);
  };

  const handlePaginationChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ): void => {
    setPageNO(value);
    void dispatch(fetchArtworkList(value, artworkPerPage));
  };

  const handleRedirectToFavourites = (): void => {
    navigate('/favourites');
  };

  return (
    <div className='artwork-site-wrapper'>
      <section>
        <TextField
          value={searchArtworkValue}
          fullWidth
          label='Search Artwork'
          variant='outlined'
          onChange={handleSearchInput}
          onKeyDown={(data: any) => {
            if (data.code === 'Enter') {
              handleSearchBtn();
            }
          }}
        />
        <div className='artwork-site-btn-wrapper'>
          <Button variant='contained' onClick={handleSearchBtn}>
            Search
          </Button>
          <Button variant='contained' onClick={handleRedirectToFavourites}>
            Go to favourites
          </Button>
        </div>
        <ElementNumSelect
          handleSelect={handleElementNumSelect}
          resultPerPage={artworkPerPage}
          selectLabel='Artwork per page'
        />
      </section>
      <hr></hr>
      <section>
        <Pagination
          count={totalPages}
          onChange={handlePaginationChange}
          shape='rounded'
          page={pageNO}
        />
        <hr></hr>
        {artworks.map((artwork: any) => (
          <ArtworkTile
            key={artwork.id}
            artworkID={artwork.id}
            imgID={artwork.image_id}
            title={artwork.title}
            favourite={favourites.includes(artwork.id)}
          />
        ))}
      </section>
    </div>
  );
};

export default Artworks;
