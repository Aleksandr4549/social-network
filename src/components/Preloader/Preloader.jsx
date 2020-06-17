import React from 'react';

import style from './Preloader.module.scss';

const Preloader = () => {
    return (
        <div className={style.container}>
            <div className={style.item1}></div>
            <div className={style.item2}></div>
            <div className={style.item3}></div>
            <div className={style.item4}></div>
            <div className={style.item5}></div>
        </div>
    );
};

export default Preloader;