import avatar from '../../assets/images/avatar_template.png';
import profileAPI from '../../api/profile-api';

const ON_CHANGE_POST = 'ON_CHANGE_POST';
const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

const initialState = {
    posts: [],
    inputCurrentValue: '',
    userProfile: null,
    currentUserId: null,
    fullname: null,
    avatar: avatar,
}

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ON_CHANGE_POST:
            return {...state, inputCurrentValue: action.payload}
        case ADD_POST:
            if(state.inputCurrentValue === '') return state;

            return {
                ...state,
                posts: [...state.posts, state.inputCurrentValue],
                inputCurrentValue: ''
            }
        case SET_USER_PROFILE:
            console.log(action.payload)
            return {
                ...state,
                userProfile: action.payload
            }
        default:
            return state;
    }
};

export const onChangePost = payload => {
    return {
        type: ON_CHANGE_POST,
        payload
    }
};

export const addPost = () => {
    return {
        type: ADD_POST,
    }
};

// export const selectUserProfile = (id) => {
//     return {
//         type: ADD_POST,
//     }
// };

const setUserProfile = userProfile => {
    return {
        type: SET_USER_PROFILE,
        payload: userProfile
    }
}

export const getUserProfile = id => {
    return async dispatch => {
        const data = await profileAPI.getUserProfile(id)
        dispatch(setUserProfile(data.data))
    }
}

export default profileReducer;