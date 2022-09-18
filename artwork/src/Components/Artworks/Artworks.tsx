import './Artworks.css';
import React, { FC, useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import ElementNumSelect from '../../Common/ElementNumSelect/ElementNumSelect';
import { SelectChangeEvent } from '@mui/material/Select';
import Pagination from '@mui/material/Pagination';
import ArtworkTile from '../../Common/ArtworkTile/ArtworkTile';
import { useAppDispatch } from '../../hooks';
import { useSelector } from 'react-redux';
import { getArtworkList, getTotalPages } from '../../Store/selectors';
import { fetchArtworkList } from '../../Store/artworkList/thunk';
import { ArtworkListI } from '../../Store/artworkList/reducer';

const Artworks: FC = () => {
  const dispatch = useAppDispatch();
  const totalPages = useSelector(getTotalPages);
  const artworks = useSelector(getArtworkList);
  const [artworkPerPage, setArtworkPerPage] = useState(25);
  const [searchArtworkValue, setSearchArtworkValue] = useState('');
  // const [chosenPage, setChosenPage] = useState(1);

  console.log(artworks);
  useEffect(() => {
    void dispatch(fetchArtworkList(artworkPerPage));
  }, []);

  const handleSearchBtn = (): void => {
    console.log('clicked');
  };

  const handleElementNumSelect = (event: SelectChangeEvent): void => {
    setArtworkPerPage(+event.target.value);
    void dispatch(fetchArtworkList(+event.target.value));
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
    // setChosenPage(value);
    // void dispatch()
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
        count={totalPages}
        onChange={handlePaginationChange}
        shape='rounded'
      />
      ---------------------------
      {artworks.map((artwork: any) => (
        <ArtworkTile
          key={artwork.id}
          artworkID={artwork.id}
          imgID={artwork.image_id}
          title={artwork.title}
        />
      ))}
    </>
  );
};

export default Artworks;
