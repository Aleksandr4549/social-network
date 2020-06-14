import React from 'react';
import PropTypes from 'prop-types';

import Avatar from '../../../Avatar/Avatar';
import style from './Post.module.scss';

const Post = ({ text = 'text post' }) => {
    return (
        <div className={style.post__container}>
            <Avatar avatarSize='small' />
            <span>{text}</span>
        </div>
    );
};

Post.propTypes = {
    text: PropTypes.string.isRequired
}

export default Post;