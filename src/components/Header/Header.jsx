import React from 'react';

import lb from '../../assets/images/logo.png';
import style from './Header.module.scss';

const Header = ({isAuth, logoutHandler}) => {
  return (
    <header className={style.header}>
        <div className={style.header__logo__container}>
          <img className={style.header__logo} src={lb} alt="logo"/> 
        </div>
        {isAuth && 
          <div className={style.header__title}>
            <button onClick={logoutHandler}>logout</button>
          </div>
        }
        {!isAuth && <div><button>login</button></div>}
    </header>
  );
};

export default Header;