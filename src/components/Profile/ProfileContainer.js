import React from 'react';
import { connect } from 'react-redux';

import Profile from './Profile';
import { onChangePost, addPost } from '../../redux/reducers/Profile-reducer';

const ProfileContainer = props => {
    return (
        <Profile 
            posts={props.profile.posts}
            inputValue={props.profile.inputCurrentValue} 
            onChangeHandler={props.onChangePost} 
            addPostHandler={props.addPost}
        />
    );
};

const mapStateToProps = state => {
    return {
        profile: state.profile
    }
}

export default connect(mapStateToProps, {onChangePost, addPost})(ProfileContainer)