import React from 'react';
import PropTypes from 'prop-types';

import ProfileInfo from './ProfileInfo/ProfileInfo';
import Posts from './Posts/Posts';
import Avatar from '../Avatar/Avatar';
import style from './Profile.module.scss';

const Profile = ({posts, inputValue, avatar, onChangeHandler, addPostHandler}) => {
    return (
        <div className={style.profile__container}>
            <div className={style.page__info}>
                <Avatar url={avatar} avatarSize='large' />
                <ProfileInfo />
            </div>
            <Posts
                posts={posts} 
                inputValue={inputValue} 
                onChangeHandler={onChangeHandler}
                addPostHandler={addPostHandler}
            />
        </div>
    );
};

Profile.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.object),
    inputValue: PropTypes.string,
    avatar: PropTypes.string,
    onChangeHandler: PropTypes.func,
    addPostHandler: PropTypes.func
}

export default Profile;