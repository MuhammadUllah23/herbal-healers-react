import './App.css';
import { ThemeProvider } from '@mui/material';
import theme from './ui/Theme'

function App() {
  return (
    <div className="App">
    <ThemeProvider theme={theme} >

    </ThemeProvider>
    </div>
  );
}

export default App;
