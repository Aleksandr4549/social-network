import authAPI from '../../api/auth-api';

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

const initialState = {
    initialized: false
}

const appReducer = (state = initialState, action) => {
    switch(action.type) {
        case INITIALIZED_SUCCESS:
            return {...state, initialized: true}
        default:
            return state
    }
}

const setInitialized = () => ({type: INITIALIZED_SUCCESS})

export const initializeApp = () => {
    return async dispatch => {
        await authAPI.me()
        dispatch(setInitialized())
    }
}

export default appReducer;