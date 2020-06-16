import React from 'react';
import PropTypes from 'prop-types'; 

import style from './NavigationBtn.module.scss'

const ToggleFollowBtn = ({text, onClickHandler}) => {
    return <button className={style.nav__btn} onClick={onClickHandler}>{text}</button>
}

ToggleFollowBtn.propTypes = {
    text: PropTypes.string.isRequired
}

export default ToggleFollowBtn;