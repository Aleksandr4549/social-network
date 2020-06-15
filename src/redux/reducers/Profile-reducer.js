import avatar from '../../assets/images/avatar_template.png';

const ON_CHANGE_POST = 'ON_CHANGE_POST';
const ADD_POST = 'ADD_POST';

const initialState = {
    posts: [],
    inputCurrentValue: '',
    avatar: avatar
}

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ON_CHANGE_POST:
            return {...state, inputCurrentValue: action.payload}
        case ADD_POST:
            return {
                posts: [...state.posts, state.inputCurrentValue],
                inputCurrentValue: ''
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

export default profileReducer;