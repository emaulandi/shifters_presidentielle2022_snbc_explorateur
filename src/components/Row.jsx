import React from 'react'
import { Grid, Box, Typography, useMediaQuery } from '@mui/material';

import Bloc from './Bloc';
import BlocSmall from './BlocSmall';
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
      <Grid item xs={isSmallScreen ? 12 : 4}>
        <Typography
          key={thematique}
          textAlign={isSmallScreen ?  'left' :'right'}
          noWrap
          sx={{
            opacity: filteredThematique.includes(thematique) ? 1 : 0.2,
            mr: 1,
          }}
        >
          {thematique}
        </Typography>
      </Grid>
      <Grid
        xs={isSmallScreen ? 12 : 8}
        container item
        justifyContent={isSmallScreen ? "flex-start" : "space-around"}
        spacing={0.5}
      >
        {data.map(({ candidat, thematique, couverture }) => (
          <Grid item key={`${thematique}-${candidat}`}>
            {isSmallScreen ? (
              <BlocSmall
                color={couverturesColor[couverture]}
                candidat={candidat}
                thematique={thematique}
                couverture={couverture}
                opacity={selectedCouvertures.includes(couverture) ? 1 : 0.2}
              />
            ) : (
              <Bloc
                color={couverturesColor[couverture]}
                candidat={candidat}
                thematique={thematique}
                couverture={couverture}
                opacity={selectedCouvertures.includes(couverture) ? 1 : 0.2}
              />
            )}
          </Grid>
        ))}
      </Grid>
    </Grid>
  )
}

export default Row;