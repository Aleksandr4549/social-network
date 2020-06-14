import React from 'react';

import ProfileInfo from './ProfileInfo/ProfileInfo';
import Posts from './Posts/Posts';
import Avatar from '../Avatar/Avatar';
import style from './Profile.module.scss';

const Profile = () => {
    return (
        <div className={style.profile__container}>
            <div className={style.page__info}>
                <Avatar avatarSize='large' />
                <ProfileInfo />
            </div>
            <Posts />
        </div>
    );
};

export default Profile;