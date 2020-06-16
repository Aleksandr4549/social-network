import React from 'react';
import PropTypes from 'prop-types';

import Avatar from '../Avatar/Avatar';
import ToggleFollowBtn from '../Buttons/Follow/ToggleFollowBtn';
import Pagination from '../Pagination/Pagination';
import style from './Users.module.scss';

const Users = ({users, onClickHandler}) => {
    return (
        <div>
            <Pagination pageSize={10} countItems={440} />
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
                        <ToggleFollowBtn 
                            text={user.isFollow ? 'unfollow' : 'follow'}
                            onClickHandler={onClickHandler} 
                            id={user.id}
                        />
                    </div>
                </div>
            ))}
        </div>
    );
};

Users.propTypes = {
    users: PropTypes.arrayOf(PropTypes.object),
    onClickHandler: PropTypes.func
}

export default Users;