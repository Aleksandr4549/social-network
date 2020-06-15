import React from 'react';
import { Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Messages from './components/Messages/Messages';
import Profile from './components/Profile/Profile';
import style from './App.module.scss';

function App() {
    return ( 
        <div className={style.app}>
            <Header />
            <Navbar />
            <Route exact path={'/'} component={() => <Profile />} />
            <Route exact path={'/Messages'} component={() => <Messages />} />
        </div>
    );
}

export default App;