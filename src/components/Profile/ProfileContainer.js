import React from 'react';
import { connect } from 'react-redux';

import Profile from './Profile';
import { onChangePost } from '../../redux/reducers/Profile-reducer';

const ProfileContainer = props => {
    return (
        <Profile 
            inputValue={props.profile.inputCurrentValue} 
            onChangeHandler={props.onChangePost} 
        />
    );
};

const mapStateToProps = state => {
    return {
        profile: state.profile
    }
}

export default connect(mapStateToProps, {onChangePost})(ProfileContainer)