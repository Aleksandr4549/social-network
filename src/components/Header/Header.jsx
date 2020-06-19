import React from 'react';

import lb from '../../assets/images/logo.png';
import style from './Header.module.scss';

const Header = ({isAuth, login, logoutHandler}) => {
  return (
    <header className={style.header}>
        <div className={style.header__logo__container}>
          <img className={style.header__logo} src={lb} alt="logo"/> 
        </div>
        {isAuth && 
          <div className={style.header__title}>
            <span>{login}</span>
            <button onClick={logoutHandler}>logout</button>
          </div>
        }
        {!isAuth && <div><button>login</button></div>}
    </header>
  );
};

export default Header;