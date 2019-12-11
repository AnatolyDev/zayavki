import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';

import Home from '../Home';
import Catalog from '../../containers/CatalogContainer';
import SignIn from '../../containers/SignIn';
import Zayavki from '../Zayavki';

const Main = (props) => {
    return (
        <>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/catalog' component={Catalog} />
                <Route path='/signin' component={SignIn} />
                {!props.user && <Redirect from='/zayavki' to='/' />}
                <Route path='/zayavki' component={Zayavki} />

            </Switch>
        </>
    )
}

const mapStateToProps = state => ({
    user : state.auth.user
})

export default connect(mapStateToProps)(Main);