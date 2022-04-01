import React from 'react'
import { Grid, Box, Typography } from '@mui/material';

import Bloc from './Bloc';
import { couverturesColor } from '../config';

const Row = ({ thematique, data, selectedCouvertures, filteredThematique }) => {
  return (
    <Grid container>
      <Grid item xs={4}>
        <Typography
          key={thematique}
          textAlign='right'
          noWrap
          sx={{
            opacity: filteredThematique.includes(thematique) ? 1 : 0.2,
            mr: 1,
          }}
        >
          {thematique}
        </Typography>
      </Grid>
      <Grid xs={8} container item justifyContent="space-between">
        {data.map(({ candidat, thematique, couverture, lien }) => (
          <Grid item key={`${thematique}-${candidat}`}>
            <Bloc
              color={couverturesColor[couverture]}
              link={lien}
              opacity={selectedCouvertures.includes(couverture) ? 1 : 0.2}
            />
          </Grid>
        ))}
      </Grid>
    </Grid>
  )
}

export default Row;