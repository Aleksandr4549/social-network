import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Messages from './components/Messages/Messages';
import ProfileContainer from './components/Profile/ProfileContainer';
import UsersContainer from './components/Users/UsersContainer';
import Preloader from './components/Preloader/Preloader';
import style from './App.module.scss';

import followAPI from './api/followed-api'

function App() {
    //followAPI.follow(10).then(res => console.log(res))

    return ( 
        <div className={style.app}>
            <Header />
            <Navbar />
            <Route exact path={'/'} render={() => <ProfileContainer />} />
            <Route exact path={'/Messages'} render={() => <Messages />} />
            <Route exact path={'/Users'} render={() => <UsersContainer />} />
            <Route exact path={'/Preloader'} render={() => <Preloader />} />
        </div>
    );
}

export default App;