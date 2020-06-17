import React from 'react';
import PropTypes from 'prop-types'; 

import style from './ToStartToEndBtn.module.scss'

const ToStartToEndBtn = ({value, onClickHandler}) => {
    return <button className={style.btn} onClick={onClickHandler}></button>
}

ToStartToEndBtn.propTypes = {
    value: PropTypes.string.isRequired,
    onClickHandler: PropTypes.func
}

export default ToStartToEndBtn;