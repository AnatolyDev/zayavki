import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Container from '@material-ui/core/Container';

import Header from './components/Header';
import Menu from './components/Menu';
import Main from './components/Main';

function App() {
  return (
    <BrowserRouter>
      <Container maxWidth="xl">
        <div className='App'>
          <div className='header'>
            <Header />
          </div>
          <div className='underheader'>
            <div className='main'>
              <Main />
            </div>
          </div>
        </div>
      </Container>
    </BrowserRouter>
  );
}

export default App;
