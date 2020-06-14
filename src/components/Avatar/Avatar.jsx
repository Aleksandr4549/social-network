import React from 'react';
import PropTypes from 'prop-types';

import avatar_template from '../../accets/img/avatar_template.png';
import style from './Avatar.module.scss';

const Avatar = ({ avatarSize }) => {
    return (
        <img 
            className={avatarSize === 'large' ? style.avatar__large : style.avatar__small} 
            src={avatar_template} alt="avatar"
        />
    );
};

Avatar.propTypes = {
    avatarSize: PropTypes.string.isRequired
}

export default Avatar;