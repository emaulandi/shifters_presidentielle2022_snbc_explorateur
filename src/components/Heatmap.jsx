import React from 'react'

import data from '/public/snbc_melted.csv';
import { Box, Grid, Typography, Link } from '@mui/material';
import { OpenInNew } from '@mui/icons-material';

import Row from './Row';
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
    <Box sx={{ maxWidth: 600 }}>
      <CouvertureToggle
        selectedCouvertures={selectedCouvertures}
        handlesetCouvertures={handlesetCouvertures}
      />
      <Grid container item justifyContent="end" alignItems="flex-end">
        {candidats.map(({ label: candidat, link }) => (
          <Box>
            <Typography
              key={candidat}
              textAlign='right'
              noWrap
              sx={{
                opacity: filteredCandidat.includes(candidat) ? 1 : 0.2,
                writingMode: 'vertical-lr',
              }}
            >
              {candidat}
            </Typography>
            <Link href={link} rel="noreferrer" target="_blank">
              <OpenInNew fontSize="small" />
            </Link>
          </Box>
        ))}
        </Grid>

        <Box>
          {thematiques.map(them => {
            const data = snbcData.filter(({ thematique }) => thematique === them);
            return (
              <Grid item sx={{ pb: 1 }}>
                <Row
                  key={`row-${them}`}
                  thematique={them}
                  data={data}
                  selectedCouvertures={selectedCouvertures}
                  filteredThematique={filteredThematique}
                />
              </Grid>
            )
          })}
        </Box>
    </Box>
  )
}

export default Heatmap;