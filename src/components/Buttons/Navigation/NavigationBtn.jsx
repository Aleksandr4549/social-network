import React from 'react';
import PropTypes from 'prop-types'; 

import style from './NavigationBtn.module.scss'

const NavigationBtn = ({text, onClickHandler}) => {
    return <button className={style.nav__btn} onClick={onClickHandler}>{text}</button>
}

NavigationBtn.propTypes = {
    text: PropTypes.string.isRequired
}

export default NavigationBtn;