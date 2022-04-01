import React from 'react'
import { FormControl, InputLabel, Select, MenuItem, OutlinedInput, Box, Chip, Checkbox, ListItemText } from '@mui/material';

import { couverturesColor } from '../config';

const CouvertureSelect = ({ selectedCouvertures, handlesetCouvertures }) => {
  const selectLabel = 'Sélectionnez des niveaux de couverture';

  const handleSelectChange = (event) => {
    const {
      target: { value },
    } = event;

    console.log(value);
    handlesetCouvertures(null, value);
  };

  return (
    <FormControl sx={{ m: 1, width: '100%' }}>
      <InputLabel id="demo-multiple-chip-label">{selectLabel}</InputLabel>
      <Select
        labelId="demo-multiple-chip-label"
        id="demo-multiple-chip"
        multiple
        value={selectedCouvertures}
        onChange={handleSelectChange}
        input={<OutlinedInput id="select-multiple-chip" label={selectLabel} />}
        renderValue={(selected) => (
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
            {selected.map((value) => (
              <Chip
                key={value}
                label={value}
                style={{ color: 'white', backgroundColor: couverturesColor[value] }}
              />
            ))}
          </Box>
        )}
      >
        {Object.keys(couverturesColor).map(couverture => (
          <MenuItem
            key={couverture}
            value={couverture}
            style={{ color: couverturesColor[couverture] }}
          >
            <Checkbox size="small" checked={selectedCouvertures.indexOf(couverture) > -1} />
            <ListItemText primary={couverture} primaryTypographyProps={{ fontWeight: 800}}/>
          </MenuItem>
        ))}
      </Select>
    </FormControl> 
  )
}

export default CouvertureSelect;