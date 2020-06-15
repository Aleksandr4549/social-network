import React from 'react';

import Avatar from '../Avatar/Avatar';
import ToggleFollowBtn from '../Buttons/Follow/ToggleFollowBtn';
import style from './Users.module.scss';

const Users = ({users}) => {
    return (
        <div>
            {users.map(user => (
                <div key={user.id} className={style.user__container}>
                    <Avatar url={user.avatarUrl} avatarSize='small' />
                    <div className={style.user__info}>
                        <div>{user.name}</div>
                        <div className={style.location}>
                            <span>{user.country}</span>
                            <span>{user.city}</span>
                        </div>
                        <div>{user.status}</div>
                        <ToggleFollowBtn text={user.isFollow ? 'unfollow' : 'follow'} />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Users;