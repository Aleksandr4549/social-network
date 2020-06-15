import React from 'react';

import ProfileInfo from './ProfileInfo/ProfileInfo';
import Posts from './Posts/Posts';
import Avatar from '../Avatar/Avatar';
import style from './Profile.module.scss';

const Profile = ({inputValue, onChangeHandler}) => {
    return (
        <div className={style.profile__container}>
            <div className={style.page__info}>
                <Avatar avatarSize='large' />
                <ProfileInfo />
            </div>
            <Posts inputValue={inputValue} onChangeHandler={onChangeHandler} />
        </div>
    );
};

export default Profile;