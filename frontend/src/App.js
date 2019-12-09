import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import { Provider } from 'react-redux';
import store from './store';

import Header from './containers/HeaderContainer';
import Main from './components/Main';

function App() {
  return (
    <Provider store={store} >
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
    </Provider>
  );
}

export default App;
