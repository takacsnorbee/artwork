import './Artworks.css';
import React, { FC, useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import ElementNumSelect from '../../Common/ElementNumSelect/ElementNumSelect';
import { SelectChangeEvent } from '@mui/material/Select';
import Pagination from '@mui/material/Pagination';
import ArtworkTile from '../../Common/ArtworkTile/ArtworkTile';
import { fetchSumOfArtworks } from '../../Store/sumOfArtworks/thunk';
import { useAppDispatch } from '../../hooks';

const Artworks: FC = () => {
  const dispatch = useAppDispatch();
  const [artworkPerPage, setArtworkPerPage] = useState('25');
  const [searchArtworkValue, setSearchArtworkValue] = useState('');
  const [chosenPage, setChosenPage] = useState(1);
  const [sumPage, setSumPage] = useState(0);

  useEffect(() => {
    console.log('useEffect');
    dispatch(fetchSumOfArtworks());
  }, []);

  const handleSearchBtn = (): void => {
    console.log('clicked');
  };

  const handleElementNumSelect = (event: SelectChangeEvent): void => {
    setArtworkPerPage(event.target.value);
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
    setChosenPage(value);
  };

  const handleClickOnTile = (): void => {
    console.log('list element');
  };

  return (
    <>
      <TextField
        label='Search Artwork'
        variant='outlined'
        onChange={handleSearchInput}
      />
      <Button variant='contained' onClick={handleSearchBtn}>
        Search
      </Button>
      <ElementNumSelect
        handleSelect={handleElementNumSelect}
        resultPerPage={artworkPerPage}
        selectLabel='Artwork per page'
      />
      <Pagination
        count={30}
        onChange={handlePaginationChange}
        shape='rounded'
      />
      ---------------------------
      <ArtworkTile />
      <ArtworkTile />
      <ArtworkTile />
      <ArtworkTile />
    </>
  );
};

export default Artworks;
