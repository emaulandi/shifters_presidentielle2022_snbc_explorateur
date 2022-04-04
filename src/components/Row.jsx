import React from 'react'
import { Grid, Box, Typography, useMediaQuery } from '@mui/material';

import Bloc from './Bloc';
import { couverturesColor, thematiquesTitles } from '../config';

const buildTitle = thematique => (
  <Box sx={{ borderBottom: 'solid #b0b0b0 1px'}}>
      <Typography
        key={thematique}
        textAlign='left'
        noWrap
        sx={{
          fontWeight: 800,
          mr: 1,
        }}
      >
        {thematique}
      </Typography>
  </Box>
);

const Row = ({ thematique, data, selectedCouvertures, filteredThematique }) => {
  const isSmallScreen = useMediaQuery('(max-width:600px)');

  if (thematiquesTitles.includes(thematique)) {
    return buildTitle(thematique);
  }

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
            fontSize: isSmallScreen ? 12 : 14,
          }}
        >
          {thematique}
        </Typography>
      </Grid>
      <Grid xs={8} container item justifyContent={isSmallScreen ? "space-between" : "space-around"}>
        {data.map(({ candidat, thematique, couverture }) => (
          <Grid item key={`${thematique}-${candidat}`}>
            <Bloc
              color={couverturesColor[couverture]}
              candidat={candidat}
              thematique={thematique}
              couverture={couverture}
              opacity={selectedCouvertures.includes(couverture) ? 1 : 0.2}
            />
          </Grid>
        ))}
      </Grid>
    </Grid>
  )
}

export default Row;