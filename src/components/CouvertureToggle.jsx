import React from 'react'
import { ToggleButtonGroup, ToggleButton } from '@mui/material';

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
        >
          {couverture}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  )
}

export default CouvertureToggle;