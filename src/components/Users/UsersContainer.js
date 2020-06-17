import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Users from './Users';
import { 
    toggleFollow, 
    getUsersTotalCount, 
    getUsers, 
    changedCurrentPage } from '../../redux/reducers/users-reducer';

const UsersContainer = ({
    usersPage, 
    toggleFollow, 
    getUsersTotalCount, 
    getUsers, 
    changedCurrentPage
    }) => {
    useEffect(() => {
        getUsersTotalCount()
        getUsers(usersPage.currentPage, usersPage.pageSize)
    }, [usersPage.usersTotalCount, usersPage.currentPage])

    return (
        <Users 
            users={usersPage.users} 
            onClickHandler={toggleFollow}
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

export default connect(mapStateToProps, {toggleFollow, getUsersTotalCount, getUsers, changedCurrentPage})(UsersContainer);