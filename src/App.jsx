import Heatmap from './components/Heatmap';
import { createTheme, ThemeProvider, responsiveFontSizes } from "@mui/material/styles";

let defaultTheme = responsiveFontSizes(createTheme({
  typography: {
    body2: {
      color: 'grey',
      fontsize: "1rem",
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
      <Heatmap />
    </ThemeProvider>
  )
}

export default App
