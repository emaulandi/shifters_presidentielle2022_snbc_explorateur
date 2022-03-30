import React from 'react'
import { Box, Link } from '@mui/material';

const Bloc = ({ color, link }) => {

  return (
    <Link href={link} rel="noreferrer" target="_blank">
      <Box
        sx={{
          width: 10,
          height: 10,
          backgroundColor: color,
        }} />
    </Link>
  )
}

export default Bloc;