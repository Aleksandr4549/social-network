import React from 'react';
import { connect } from 'react-redux';

import Users from './Users';
import { setUsers, toggleFollow } from '../../redux/reducers/users-reducer';

const UsersContainer = (props) => {
    return (
        <Users users={props.usersPage.users}/>
    );
};

const mapStateToProps = state => {
    return {
        usersPage: state.usersPage
    }
};

export default connect(mapStateToProps, {setUsers, toggleFollow})(UsersContainer);