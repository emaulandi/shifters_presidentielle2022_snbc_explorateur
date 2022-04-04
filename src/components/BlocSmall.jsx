import React from 'react'
import { Grid, Avatar, Box, Typography, Link } from '@mui/material';

import { candidats } from '../config';

const BlocSmall = ({ color, opacity, candidat, thematique, couverture }) => {
  const candidatImg = candidats.find(({ label }) => label === candidat)?.img;
  const candidatLink= candidats.find(({ label }) => label === candidat)?.link;

  return (
    <Box
      sx={{
        display: 'inline',
      }}
    >
      <Grid
        container
        justifyContent="space-around"
        alignItems="center"
        
        sx={{
          backgroundColor: color,
          color: 'white',
          opacity,
          p: 0.5,
        }}
      >
        <Link key={`link-${candidat}`} href={candidatLink} rel="noreferrer" target="_blank">
          <Avatar
            alt=""
            src={candidatImg}
            sx={{ width: 25, height: 25, opacity, mr: 0.5 }}
          />
        </Link>
        <Typography>{candidat}</Typography>
      </Grid>
    </Box>
  );
}

export default BlocSmall;
