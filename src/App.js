import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import Messages from './components/Messages/Messages';
import ProfileContainer from './components/Profile/ProfileContainer';
import UsersContainer from './components/Users/UsersContainer';
import Login from './components/Login/Login';
import Preloader from './components/Preloader/Preloader';
import { initializeApp } from './redux/reducers/app-reducer';
import style from './App.module.scss';

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if(!this.props.initialized) return <Preloader />

        return (
            <div className={style.app}>
                <HeaderContainer />
                <Navbar />
                <Route path={'/profile:userId?'} render={() => <ProfileContainer />} />
                <Route path={'/messages'} render={() => <Messages />} />
                <Route path={'/users'} render={() => <UsersContainer />} />
                <Route path={'/login'} render={() => <Login />} />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    initialized: state.app.initialized
})

export default connect(mapStateToProps, {initializeApp})(App);