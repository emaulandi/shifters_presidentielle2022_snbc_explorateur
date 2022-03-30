import React from 'react'

import data from '/public/snbc_melted.csv';
import { Box, Grid, Typography } from '@mui/material';

import Bloc from './Bloc';
import CouvertureToggle from './CouvertureToggle';

import { couverturesColor, candidats, thematiques } from '../config';

const Heatmap = () => {
  const snbcData = data.map(([thematique, candidat, couverture, lien]) => ({ thematique, candidat, couverture, lien }));
  console.log(snbcData);

  const [selectedCouvertures, setCouvertures] = React.useState(() => Object.keys(couverturesColor));

  const handlesetCouvertures = (event, newCouvertures) => {
    setCouvertures(newCouvertures);
  };

  console.log(selectedCouvertures);

  return (
    <Box>
      <CouvertureToggle
        selectedCouvertures={selectedCouvertures}
        handlesetCouvertures={handlesetCouvertures}
      />

      <Grid container>
        {candidats.map(candidat => (<Typography key={candidat}>{candidat}</Typography>))}
      </Grid>
      <Grid container>
        {thematiques.map(thematique => (<Typography key={thematique}>{thematique}</Typography>))}
      </Grid>
      <Grid container>
        {snbcData.map(({ candidat, thematique, couverture, lien }) => (
          <Bloc
            key={`${thematique}-${candidat}`}
            color={couverturesColor[couverture]}
            link={lien}
            opacity={selectedCouvertures.includes(couverture) ? 1 : 0.2}
          />
        ))}
      </Grid>
    </Box>
  )
}

export default Heatmap;