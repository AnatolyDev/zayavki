import React from 'react';

import { connect } from 'react-redux';

import Header from '../../components/Header';

const HeaderContainer = (props) => {
    return (
        <Header currentUser={props.currentUser} />
    )
}

const mapStateToProps = state => ({
    currentUser : state.auth.user
})

export default connect(mapStateToProps)(HeaderContainer);