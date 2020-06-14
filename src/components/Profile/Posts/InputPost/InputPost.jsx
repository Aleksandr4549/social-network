import React from 'react';
import PropTypes from 'prop-types';

import SendButton from '../../../Buttons/Send/Send';
import style from './InputPost.module.scss';

const InputPost = ({ value = 'new post', onChangeHandler, addPostHandler }) => {
    return (
        <div className={style.inputPost__container}>
            <input
                type="text"
                value={value}
                onChange={onChangeHandler}
            />
            <SendButton onClickHandler={addPostHandler} />
        </div>
    );
};

InputPost.propTypes = {
    value: PropTypes.string.isRequired,
    onChangeHandler: PropTypes.func.isRequired,
    addPostHandler: PropTypes.func.isRequired,
}

export default InputPost;