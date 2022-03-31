import React from 'react'

import data from '/public/snbc_melted.csv';
import { Box, Grid, Typography } from '@mui/material';

import Bloc from './Bloc';
import CouvertureToggle from './CouvertureToggle';

import { couverturesColor, candidats, thematiques } from '../config';

const Heatmap = () => {
  const snbcData = data.map(([thematique, candidat, couverture, lien]) => ({ thematique, candidat, couverture, lien }));
  

  const [selectedCouvertures, setCouvertures] = React.useState(() => Object.keys(couverturesColor));

  const handlesetCouvertures = (event, newCouvertures) => {
    setCouvertures(newCouvertures);
  };

  // which candidat & thematique have those selected couverture ?
  const filteredData = snbcData.filter(({ couverture }) => selectedCouvertures.includes(couverture));
  const filteredCandidat = [...new Set(filteredData.map(({ candidat }) => candidat))];
  const filteredThematique = [...new Set(filteredData.map(({ thematique }) => thematique))];

  return (
    <Box>
      <CouvertureToggle
        selectedCouvertures={selectedCouvertures}
        handlesetCouvertures={handlesetCouvertures}
      />
      <Grid container>
        <Grid container item xs={12}>
          <Grid item xs={8} container>
            {candidats.map(candidat => (
              <Typography
                key={candidat}
                sx={{
                  opacity: filteredCandidat.includes(candidat) ? 1 : 0.2,
                  transform: 'rotate(-50deg)',
                  width: 30,
                }}
              >
                {candidat}
              </Typography>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={4} container direction="column">
          {thematiques.map(thematique => (
            <Typography
              key={thematique}
              sx={{
                opacity: filteredThematique.includes(thematique) ? 1 : 0.2,
              }}
            >
              {thematique}
            </Typography>
          ))}
        </Grid>
        <Grid item xs={8} container spacing={1} columns={12}>
          {snbcData.map(({ candidat, thematique, couverture, lien }) => (
            <Grid item xs= {1}>
              <Bloc
                key={`${thematique}-${candidat}`}
                color={couverturesColor[couverture]}
                link={lien}
                opacity={selectedCouvertures.includes(couverture) ? 1 : 0.2}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Box>
  )
}

export default Heatmap;