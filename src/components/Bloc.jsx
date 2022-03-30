import React from 'react'
import { Box } from '@mui/material';

const Bloc = ({ color, link }) => {

  return (
    <Box
      sx={{
        width: 10,
        height: 10,
        backgroundColor: color,
      }} />
  )
}

export default Bloc;