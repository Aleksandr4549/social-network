import React from 'react';

import style from './ToggleFollowBtn.module.scss'

const ToggleFollowBtn = ({text}) => {
    return <button className={style.toggle__follow__btn}>{text}</button>
}

export default ToggleFollowBtn;