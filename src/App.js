import './App.css';
import { ThemeProvider } from '@mui/material';
import theme from './ui/Theme'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <ThemeProvider theme={theme} >
      <BrowserRouter>
        <Routes>
          
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
    </div>
  );
}

export default App;
