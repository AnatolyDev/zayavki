import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../Home';
import Catalog from '../Catalog';

const Main = () => {
    return (
        <>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/catalog' component={Catalog} />
            </Switch>
        </>
    )
}

export default Main;