import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Messages from './components/Messages/Messages';
import ProfileContainer from './components/Profile/ProfileContainer';
import UsersContainer from './components/Users/UsersContainer';
import style from './App.module.scss';

function App() {
    return ( 
        <div className={style.app}>
            <Header />
            <Navbar />
            <Route exact path={'/'} render={() => <ProfileContainer />} />
            <Route exact path={'/Messages'} render={() => <Messages />} />
            <Route exact path={'/Users'} render={() => <UsersContainer />} />
        </div>
    );
}

export default App;