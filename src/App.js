import React from 'react';
import { Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import style from './App.module.scss';

function App() {
    return ( 
        <div className={style.app}>
            <Header />
            <Navbar />
            <Route exact path={'/'} component={() => <Profile />} />
        </div>
    );
}

export default App;