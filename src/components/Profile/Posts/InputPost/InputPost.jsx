import React from 'react';
import PropTypes from 'prop-types';

import SendBtn from '../../../Buttons/SendBtn/SendBtn';
import style from './InputPost.module.scss';

const InputPost = ({ value, onChangeHandler, addPostHandler }) => {
    return (
        <div className={style.inputPost__container}>
            <input
                type="text"
                value={value}
                onChange={(e) => onChangeHandler(e.target.value)}
            />
            <SendBtn onClickHandler={addPostHandler} />
        </div>
    );
};

InputPost.propTypes = {
    value: PropTypes.string.isRequired,
    onChangeHandler: PropTypes.func.isRequired,
    addPostHandler: PropTypes.func.isRequired,
}

export default InputPost;