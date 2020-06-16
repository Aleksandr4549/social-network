import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Profile from './Profile';
import { onChangePost, addPost } from '../../redux/reducers/profile-reducer';

const ProfileContainer = props => {
    console.log(props)
    return (
        <Profile 
            posts={props.profile.posts}
            inputValue={props.profile.inputCurrentValue} 
            avatar={props.profile.avatar}
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

export default withRouter(connect(mapStateToProps, {onChangePost, addPost})(ProfileContainer))