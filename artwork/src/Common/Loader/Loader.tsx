import React, { FC } from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

const Loader: FC = () => {
  // const isLoading = useSelector();

  return (
    <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={false}
    >
      <CircularProgress color='inherit' />
    </Backdrop>
  );
};
export default Loader;
