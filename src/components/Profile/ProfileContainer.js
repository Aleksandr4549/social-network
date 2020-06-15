import React from 'react';
import { connect } from 'react-redux';

import Profile from './Profile';

const ProfileContainer = () => {
    return (
        <Profile />
    );
};

const mapStateToProps = state => {
    return {
        profile: state.profile
    }
}

export default connect(mapStateToProps, null)(ProfileContainer)