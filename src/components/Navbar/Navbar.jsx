import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import style from './Navbar.module.scss';

const Navbar = () => {
    const [state] = useState(['Profile', 'Messages', 'Users'])

    return (
        <div className={style.navbar__container}>   
            {state.map((item, i) => <Link key={i} to={item}>{item}</Link>)}
        </div>
    );
};

export default Navbar;