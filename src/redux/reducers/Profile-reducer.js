const ON_CHANGE_POST = 'ON_CHANGE_POST';

const initialState = {
    posts: [],
    inputCurrentValue: ''
}

const ProfileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ON_CHANGE_POST:
            return {...state, inputCurrentValue: action.payload}
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

export default ProfileReducer;