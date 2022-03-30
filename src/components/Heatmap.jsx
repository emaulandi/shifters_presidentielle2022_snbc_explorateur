import React from 'react'

import data from '/public/snbc_melted.csv';
import { Box } from '@mui/material';

import Bloc from './Bloc';
import { couverturesColor } from '../config';

const Heatmap = () => {
  const snbcData = data.map(([thematique, candidat, couverture, lien]) => ({ thematique, candidat, couverture, lien }));
  console.log(snbcData);

  return (
    <Box>
      {snbcData.map(({ candidat, thematique, couverture, lien }) => (
        <Bloc
          key={`${thematique}-${candidat}`}
          color={couverturesColor[couverture]}
          link={lien} />
      ))}
    </Box>
  )
}

export default Heatmap;