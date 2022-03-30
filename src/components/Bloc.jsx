import React from 'react'
import { Box, Link } from '@mui/material';

const Bloc = ({ color, link, opacity }) => {

  return (
    <Box
      sx={{
        display: 'inline',
      }}
    >
      <Link href={link} rel="noreferrer" target="_blank">
        <Box
          sx={{
            width: 25,
            height: 25,
            backgroundColor: color,
            opacity,
          }} />
      </Link>
    </Box>
  )
}

export default Bloc;