import React from 'react'
import { Typography, Box } from '@mui/material';

import { couverturesColor } from '../config';

const Introduction = () => {

  return (
    <Box>
      <Typography variant="h5"  gutterBottom>
        Quelles sont les orientations de la Stratégie Nationale Bas-Carbone plus ou moins couvertes dans les programmes ?
      </Typography>
      <Typography variant="body2" gutterBottom>
        Un carré représente le niveau de couverture d'une thématique par le programme d'un candidat. Pour chaque thématique, à quel point chaque candidat couvre-t-il les grandes orientations de la SNBC ?
      </Typography>
      <Typography variant="body2" gutterBottom>
        Plusieurs cas : le programme est <span style={{ marginRight: 4, borderBottom: `solid ${couverturesColor['Antagoniste']}` }}>antagoniste</span> 
        ou <span style={{ borderBottom: `solid ${couverturesColor['Non abordé']}` }}>n'aborde pas</span> cet aspect
        de la Stratégie Nationale Bas-Carbone. Des mesures favorables adressent cette thématique avec différents niveaux de couverture : <span style={{ borderBottom: `solid ${couverturesColor['Couverture limitée']}` }}>limité</span>,  <span style={{ borderBottom: `solid ${couverturesColor['Couverture partielle']}` }}>partiel</span>,  <span style={{ borderBottom: `solid ${couverturesColor['Bonne couverture']}` }}>bon</span>.
      </Typography>
      <Typography variant="caption" gutterBottom>
        Filtrez par catégorie
      </Typography>
    </Box>
  );
};

export default Introduction;
