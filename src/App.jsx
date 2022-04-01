import Heatmap from './components/Heatmap';
import { createTheme, ThemeProvider } from "@mui/material/styles";

const defaultTheme = createTheme();

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Heatmap />
    </ThemeProvider>
  )
}

export default App
