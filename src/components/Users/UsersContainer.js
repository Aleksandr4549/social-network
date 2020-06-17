import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Users from './Users';
import Preloader from '../Preloader/Preloader';
import { 
    getUsersTotalCount, 
    getUsers, 
    changedCurrentPage,
    follow,
    unfollow } from '../../redux/reducers/users-reducer';

const UsersContainer = ({
    usersPage,  
    getUsersTotalCount, 
    getUsers, 
    changedCurrentPage,
    follow,
    unfollow}) => {
    useEffect(() => {
        getUsersTotalCount()
        getUsers(usersPage.currentPage, usersPage.pageSize)
    }, [usersPage.usersTotalCount, usersPage.currentPage])

    if(usersPage.isFetching) {
        return <Preloader />
    }

    return (
        <Users 
            users={usersPage.users} 
            followClickHandler={follow}
            unfollowClickHandler={unfollow}
            changedCurrentPage={changedCurrentPage}
            pageSize={usersPage.pageSize}
            currentPage={usersPage.currentPage} 
            usersTotalCount={usersPage.usersTotalCount}
        />
    );
};

const mapStateToProps = state => {
    return {
        usersPage: state.usersPage
    }
};

export default connect(mapStateToProps, {getUsersTotalCount, getUsers, changedCurrentPage, follow, unfollow})(UsersContainer);