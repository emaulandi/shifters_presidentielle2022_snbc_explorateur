import React from 'react'
import { ToggleButtonGroup, ToggleButton } from '@mui/material';
import { styled } from '@mui/material/styles';

import { couverturesColor } from '../config';

const CouvertureToggle = ({ selectedCouvertures, handlesetCouvertures }) => {

  return (
    <ToggleButtonGroup
      value={selectedCouvertures}
      onChange={handlesetCouvertures}
    >
      {Object.keys(couverturesColor).map(couverture => (
        <ToggleButton
          key={`button-${couverture}`}
          value={couverture}
          sx={{
            '&.Mui-selected': {
              color: 'white',
              backgroundColor: couverturesColor[couverture],
            },
          }}
        >
          {couverture}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  )
}

export default CouvertureToggle;