import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../Home';
import Catalog from '../Catalog';
import SignIn from '../SignIn';

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