import React from 'react';
import PropTypes from 'prop-types'; 

import style from './ToggleFollowBtn.module.scss'

const ToggleFollowBtn = ({text, onClickHandler, id}) => {
    return <button onClick={() => onClickHandler(id)} className={style.toggle__follow__btn}>{text}</button>
}

ToggleFollowBtn.propTypes = {
    text: PropTypes.string.isRequired,
    onClickHandler: PropTypes.func.isRequired,
    id: PropTypes.number
}

export default ToggleFollowBtn;