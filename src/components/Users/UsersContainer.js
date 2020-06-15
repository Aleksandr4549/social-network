import React from 'react';
import { connect } from 'react-redux';

import Users from './Users';
import { setUsers, toggleFollow } from '../../redux/reducers/users-reducer';

const UsersContainer = () => {
    return (
        <Users />
    );
};

const mapStateToProps = state => {
    return {
        usersPage: state.usersPage
    }
};

export default connect(mapStateToProps, {setUsers, toggleFollow})(UsersContainer);