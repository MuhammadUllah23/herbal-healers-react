import './App.css';
import { ThemeProvider } from '@mui/material';
import theme from './components/ui/Theme'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <ThemeProvider theme={theme} >
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<div>Landing Page</div>}/>
          <Route path="/remedies" element={<div>List of Remedies</div>}/>
          <Route path="/illnesses" element={<div>List of Ilnesses</div>}/>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
    </div>
  );
}

export default App;
