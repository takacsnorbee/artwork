import React from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

interface PropsI {
  handleSelect: (event: SelectChangeEvent) => void;
  resultPerPage: number;
  selectLabel: string;
}

const ElementNumSelect = ({
  handleSelect,
  resultPerPage,
  selectLabel,
}: PropsI): JSX.Element => {
  return (
    <FormControl fullWidth>
      <InputLabel id='demo-simple-select-label'>{selectLabel}</InputLabel>
      <Select
        data-testid='perPage'
        labelId='demo-simple-select-label'
        id='demo-simple-select'
        value={`${resultPerPage}`}
        label={selectLabel}
        onChange={handleSelect}
      >
        <MenuItem value={5}>5</MenuItem>
        <MenuItem value={10}>10</MenuItem>
        <MenuItem value={20}>20</MenuItem>
        <MenuItem value={25}>25</MenuItem>
        <MenuItem value={30}>30</MenuItem>
      </Select>
    </FormControl>
  );
};

export default ElementNumSelect;
