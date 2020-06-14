import React from 'react';

import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import style from './App.module.scss';

function App() {
    return ( 
        <div className={style.app}>
            <Header />
            <Navbar />
        </div>
    );
}

export default App;