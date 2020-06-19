import React from 'react';
import { connect } from 'react-redux';

import Header from './Header';

const HeaderContainer = props => {
    const {isAuth, login} = props.auth
    return <Header isAuth={isAuth} login={login} />
};

const mapStateToProps = state => ({auth: state.auth})

export default connect(mapStateToProps, {})(HeaderContainer);