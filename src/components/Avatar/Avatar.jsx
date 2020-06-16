import React from 'react';
import PropTypes from 'prop-types';

import avatar_template from '../../assets/images/avatar_template.png';
import style from './Avatar.module.scss';

const Avatar = ({ url = avatar_template, avatarSize }) => {
    return (
        <img 
            className={avatarSize === 'large' ? style.avatar__large : style.avatar__small} 
            src={url} alt="avatar"
        />
    );
};

Avatar.propTypes = {
    url: PropTypes.string,
    avatarSize: PropTypes.string.isRequired
}

export default Avatar;