import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Profile from './Profile';
import Preloader from '../Preloader/Preloader';
import { onChangePost, addPost, getUserProfile } from '../../redux/reducers/profile-reducer';
import { withAuthRedirect } from '../../hoc/withAuth';
import avatar from '../../assets/images/avatar_template.png';

const ProfileContainer = props => {
    useEffect(() => {
        let userId = props.match.params.userId;
        if(!userId) userId = props.auth.id
        props.getUserProfile(userId)
    }, [])

    if(!props.profile.userProfile) return <Preloader />

    return (
        <Profile 
            posts={props.profile.posts}
            inputValue={props.profile.inputCurrentValue}
            fullName={props.profile.userProfile.fullName} 
            avatar={props.profile.userProfile.photos.large || avatar}
            onChangeHandler={props.onChangePost} 
            addPostHandler={props.addPost}
        />
    );
};

const mapStateToProps = state => {
    return {
        profile: state.profile,
        auth: state.auth
    }
}

export default withAuthRedirect(withRouter(connect(mapStateToProps, {onChangePost, addPost, getUserProfile})(ProfileContainer)))