import React from 'react';
import './App.css';

import Header from './components/Header';
import Menu from './components/Menu';
import Main from './components/Main';

function App() {
  return (
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
  );
}

export default App;
