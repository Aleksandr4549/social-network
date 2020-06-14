import React from 'react';

import lb from '../../assets/images/logo.png';
import style from './Header.module.scss';

const Header = () => {
  return (
    <header className={style.header}>
        <div className={style.header__logo__container}>
          <img className={style.header__logo} src={lb} alt="logo"/> 
        </div>
        <div className={style.header__title}>
          Header
        </div>
    </header>
  );
};

export default Header;