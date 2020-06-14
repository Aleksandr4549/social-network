import React from 'react';

import ProfileInfo from './ProfileInfo/ProfileInfo';
import style from './Profile.module.scss';

const Profile = () => {
    return (
        <div className={style.profile__container}>
            <div className={style.page__info}>
                <ProfileInfo />
            </div>
        </div>
    );
};

export default Profile;