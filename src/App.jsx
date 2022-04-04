import Heatmap from './components/Heatmap';
import { createTheme, ThemeProvider, responsiveFontSizes } from "@mui/material/styles";
import CssBaseline from '@mui/material/CssBaseline';

let defaultTheme = responsiveFontSizes(createTheme({
  typography: {
    body2: {
      color: 'grey',
      fontSize: "1rem",
    },
    h5: {
      fontWeight: 900,
    },
    fontFamily: [
      'Arial',
      '-apple-system',
    ].join(','),
    button: {
      fontFamily: 'Roboto',
      fontStyle: 'bold',
    },
  },
}));

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Heatmap />
    </ThemeProvider>
  )
}

export default App
