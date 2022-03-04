import './App.css';
import { ThemeProvider } from '@mui/material';
import theme from './ui/Theme'
import { Box } from '@mui/material';

function App() {
  return (
    <div className="App">
    <ThemeProvider theme={theme} >
      <Box style={{backgroundColor: "#228b22", height: "100vh"}} />
    </ThemeProvider>
    </div>
  );
}

export default App;
