import React, { FC } from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { useSelector } from 'react-redux';
import { getLoaderState } from '../../Store/selectors';

const Loader: FC = () => {
  const isLoading = useSelector(getLoaderState);

  return (
    <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={isLoading}
    >
      <CircularProgress color='inherit' />
    </Backdrop>
  );
};
export default Loader;
