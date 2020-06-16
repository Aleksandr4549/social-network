import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Users from './Users';
import { setUsers, toggleFollow, getUsers } from '../../redux/reducers/users-reducer';

const UsersContainer = (props) => {
    return (
        <Users users={props.usersPage.users} onClickHandler={props.toggleFollow} />
    );
};

const mapStateToProps = state => {
    return {
        usersPage: state.usersPage
    }
};

export default connect(mapStateToProps, {setUsers, toggleFollow, getUsers})(UsersContainer);