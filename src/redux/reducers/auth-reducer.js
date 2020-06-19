import authAPI from '../../api/auth-api';
import loginAPI from '../../api/login-api';

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';
const LOGOUT = 'LOGOUT';

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
        case LOGOUT:
            return initialState
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

const cleanAuthUserData = () => ({type: LOGOUT})

export const getAuthData = () => {
    return async dispatch => {
        const authdata = await authAPI.me()
        if(authdata.data.resultCode === 0) {
            dispatch(setAuthUserData(authdata.data.data.id, authdata.data.data.email, authdata.data.data.login))
        }
    }
}

export const login = ({email, password, rememberMe}) => {
    return async dispath => {
        const data = await loginAPI.login(email, password, rememberMe)
        dispath(getAuthData())
    }
}

export const logout = () => {
    return async dispath => {
        const data = await loginAPI.logout()
        dispath(cleanAuthUserData())
    }
}


export default authReducer;