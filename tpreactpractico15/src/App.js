import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header/Header';
import MainPage from './pages/MainPage';

const App = () => {
  return (
    <ThemeProvider>
      <Header />
      <MainPage />
    </ThemeProvider>
  );
};

export default App;
