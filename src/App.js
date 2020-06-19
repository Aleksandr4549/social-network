import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import Messages from './components/Messages/Messages';
import ProfileContainer from './components/Profile/ProfileContainer';
import UsersContainer from './components/Users/UsersContainer';
import Login from './components/Login/Login';
import { getAuthData } from './redux/reducers/auth-reducer';
import style from './App.module.scss';

const App = props => {
    useEffect(() => {
        props.getAuthData()
    }, [props.state.auth.isAuth])

    return (
        <div className={style.app}>
            <HeaderContainer />
            <Navbar />
            <Route exact path={'/profile:userId?'} render={() => <ProfileContainer />} />
            <Route exact path={'/messages'} render={() => <Messages />} />
            <Route exact path={'/users'} render={() => <UsersContainer />} />
            <Route exact path={'/login'} render={() => <Login />} />
        </div>
    )
}


export default connect(null, {getAuthData})(App);