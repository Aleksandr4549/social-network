import React from 'react';
import PropTypes from 'prop-types'; 

import style from './ToPrevToNextBtn.module.scss'

const ToPrevToNextBtn = ({text, onClickHandler}) => {
    return <button className={style.btn} onClick={onClickHandler}>{text}</button>
}

ToPrevToNextBtn.propTypes = {
    text: PropTypes.string.isRequired
}

export default ToPrevToNextBtn;