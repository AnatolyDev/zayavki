import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header';
import Menu from './components/Menu';
import Main from './components/Main';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <div className='header'>
          <Header />
        </div>
        <div className='underheader'>
          <div className='menu'>
            <Menu />
          </div>
          <div className='main'>
            <Main />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
