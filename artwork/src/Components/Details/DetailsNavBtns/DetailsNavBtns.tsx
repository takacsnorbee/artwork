import React, { FC } from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

export const DetailsNavBtns: FC = () => {
  const navigate = useNavigate();

  return (
    <div className='details-btn-wrapper'>
      <Button variant='contained' onClick={() => navigate('/artwork')}>
        Back
      </Button>
      <Button variant='contained' onClick={() => navigate('/favourites')}>
        Favoirutes
      </Button>
    </div>
  );
};
