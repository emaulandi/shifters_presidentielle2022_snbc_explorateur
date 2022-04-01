import React from 'react'
import { Box, Link } from '@mui/material';

const Bloc = ({ color, link, opacity }) => {
  const heatmapWidth = window.innerWidth * 0.6;
  const blocWidth = heatmapWidth / 12 - 5;

  return (
    <Box
      sx={{
        display: 'inline',
      }}
    >
      <Link href={link} rel="noreferrer" target="_blank">
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
      </Link>
    </Box>
  )
}

export default Bloc;