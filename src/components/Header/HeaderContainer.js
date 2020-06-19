import React from 'react';
import { connect } from 'react-redux';

import Header from './Header';
import { logout } from '../../redux/reducers/auth-reducer';

const HeaderContainer = props => {
    const {isAuth, login} = props.auth
    return <Header isAuth={isAuth} login={login} logoutHandler={props.logout} />
};

const mapStateToProps = state => ({auth: state.auth})

export default connect(mapStateToProps, {logout})(HeaderContainer);