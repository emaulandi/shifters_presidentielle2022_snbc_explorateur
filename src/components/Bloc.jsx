import React from 'react'
import { Grid, Avatar, Box, Typography } from '@mui/material';
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';

import { candidats, couverturesColor } from '../config';

const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#f5f5f9',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 200,
    fontSize: theme.typography.pxToRem(16),
    border: '1px solid #dadde9',
  },
}));

const Bloc = ({ color, opacity, candidat, thematique, couverture }) => {
  const heatmapWidth = window.innerWidth * 0.6;
  const blocWidth = heatmapWidth / 12 - 5;

  const candidatImg = candidats.find(({ label }) => label === candidat)?.img;

  return (
    <Box
      sx={{
        display: 'inline',
      }}
    >
      <HtmlTooltip
        title={
          <React.Fragment>
            <Grid container alignItems="center">
              <Avatar alt="" src={candidatImg} />
              <Typography sx={{ ml: 1 }} color="inherit">{candidat}</Typography>
            </Grid>
            <Typography variant="caption" display="block" gutterBottom>
            {thematique}: <span style={{ padding: 5, fontWeight: 'bold', color: 'white', backgroundColor: couverturesColor[couverture] }}>{couverture}</span> 
            </Typography>
          </React.Fragment>
        }
      >
        <Box
          sx={{
            width: {
              xs: blocWidth,
              sm: 25,
            },
            height: {
              xs: 25,
              sm: 25,
            },
            backgroundColor: color,
            opacity,
          }}
        />
      </HtmlTooltip>
    </Box>
  )
}

export default Bloc;