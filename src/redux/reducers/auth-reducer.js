import authAPI from '../../api/auth-api';

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';

const initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                id: action.id,
                email: action.email,
                login: action.login,
                isAuth: true
            }
        default:
            return state
    }
};

const setAuthUserData = (id, email, login) => {
    return {
        type: SET_AUTH_USER_DATA,
        id,
        email,
        login
    }
}

export const getAuthUserData = () => {
    return async dispatch => {
        const authdata = await authAPI.me()
        if(authdata.data.resultCode === 0) {
            dispatch(setAuthUserData(authdata.data.data.id, authdata.data.data.email, authdata.data.data.login))
        }
    }
}

export default authReducer;