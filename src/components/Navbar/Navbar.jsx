import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import style from './Navbar.module.scss';

const Navbar = ({items = ['Home', 'Messages']}) => {
    return (
        <div className={style.navbar__container}>   
            {items.map((item, i) => <Link key={i} to={item === 'Home' ? '/' : item}>{item}</Link>)}
        </div>
    );
};

Navbar.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string)
}

export default Navbar;