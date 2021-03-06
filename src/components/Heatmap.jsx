import React from 'react'

import data from '/public/snbc_melted.csv';
import { Container, Box, Grid, Typography, Link, useMediaQuery, Avatar } from '@mui/material';

import Row from './Row';
import CouvertureToggle from './CouvertureToggle';
import CouvertureSelect from './CouvertureSelect';
import Introduction from './Introduction';

import { couverturesColor, candidats, thematiques } from '../config';

const Heatmap = () => {
  const snbcData = data.map(([thematique, candidat, couverture, lien]) => ({ thematique, candidat, couverture, lien }));
  const isSmallScreen = useMediaQuery('(max-width:600px)');

  const [selectedCouvertures, setCouvertures] = React.useState(() => Object.keys(couverturesColor));

  const handlesetCouvertures = (event, newCouvertures) => {
    setCouvertures(newCouvertures);
  };

  // which candidat & thematique have those selected couverture ?
  const filteredData = snbcData.filter(({ couverture }) => selectedCouvertures.includes(couverture));
  const filteredCandidat = [...new Set(filteredData.map(({ candidat }) => candidat))];
  const filteredThematique = [...new Set(filteredData.map(({ thematique }) => thematique))];

  return (
    <Container maxWidth="sm">
      <Introduction />
      <Box sx={{ mb: 2 }}>
        {isSmallScreen ? (
          <CouvertureSelect
            selectedCouvertures={selectedCouvertures}
            handlesetCouvertures={handlesetCouvertures}
          />
        ): (
          <CouvertureToggle
            selectedCouvertures={selectedCouvertures}
            handlesetCouvertures={handlesetCouvertures}
          />
        )}
      </Box>
      {!isSmallScreen && (
        <Grid container>
          <Grid item xs={4}></Grid>
          <Grid container item xs={8} justifyContent="space-around" alignItems="flex-end">
            {candidats.map(({ label: candidat, link, img }) => (
              <Box key={`box-${candidat}`}>
                <Link key={`link-${candidat}`} href={link} rel="noreferrer" target="_blank">
                  <Typography
                    key={`text-${candidat}`}
                    noWrap
                    sx={{
                      opacity: filteredCandidat.includes(candidat) ? 1 : 0.2,
                      writingMode: 'vertical-lr',
                      mb: 1,
                      fontSize: 14,
                    }}
                  >
                    {candidat}
                  </Typography>
                  <Avatar
                    key={`avatar-${candidat}`}
                    alt=""
                    src={img}
                    sx={{ width: 30, height: 30, opacity: filteredCandidat.includes(candidat) ? 1 : 0.2 }}
                  />
                </Link>
              </Box>
            ))}
          </Grid>
        </Grid>
      )}

      <Box>
        {thematiques.map(them => {
          const data = snbcData.filter(({ thematique }) => thematique === them);
          return (
            <Grid item key={`griditem-${them}`} sx={{ pb: 1 }}>
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
    </Container>
  )
}

export default Heatmap;