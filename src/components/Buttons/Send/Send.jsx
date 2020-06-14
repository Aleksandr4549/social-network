import React from 'react';
import PropTypes from 'prop-types';

import style from './Send.module.scss';

const Send = ({ onClickHandler }) => {
    return <button className={style.send__btn} onClick={onClickHandler}>Send</button>
};

Send.propTypes = {
    onClickHandler: PropTypes.func.isRequired
}

export default Send;