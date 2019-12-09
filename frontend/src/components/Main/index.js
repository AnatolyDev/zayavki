import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../Home';
import Catalog from '../../containers/CatalogContainer';
import SignIn from '../../containers/SignIn';

const Main = () => {
    return (
        <>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/catalog' component={Catalog} />
                <Route path='/signin' component={SignIn} />
            </Switch>
        </>
    )
}

export default Main;