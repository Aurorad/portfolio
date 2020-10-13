// Core
import React from 'react';
// MUI Components
import { MuiThemeProvider } from '@material-ui/core';
// Components
import { theme } from './Theme';
import { Header } from './components/Header/index';
import { About } from './components/About/index';
import { PortfolioHeader } from './components/PortfolioHeader/index';
import { Portfolio } from './components/Portfolio/index';
import { Contact } from './components/Contact/index';
import { Menu } from './components/Menu/index';
import { Footer } from './components/Footer';

function App() {
  return (
      <MuiThemeProvider theme={theme}>
        <Menu />
        <Header />
        <About />
        <PortfolioHeader />
        <Portfolio />
        <Contact />
        <Footer />
      </MuiThemeProvider>
  );
}

export default App;
