import usersAPI from '../../api/users-api';

const SET_USERS = 'SET_USERS';
const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW';
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT';
const CHANGED_CURRENT_PAGE = 'CHANGED_CURRENT_PAGE';

const initialState = {
    users: [],
    usersTotalCount: null,
    pageSize: 10,
    currentPage: 1
};

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USERS_TOTAL_COUNT:
            return {...state, usersTotalCount: action.payload}
        case SET_USERS: 
            return {...state, users: [...action.payload]}
        case TOGGLE_FOLLOW:
            return {
                ...state, 
                users: state.users.map(user => user.id === action.payload ? {...user, isFollow: !user.isFollow} : user)
            }
        case CHANGED_CURRENT_PAGE:
            return {...state, currentPage: action.payload}
        default:
            return state;
    }
};

const setUsersTotalCount = usersTotalCount => {
    return {
        type: SET_USERS_TOTAL_COUNT,
        payload: usersTotalCount
    }
}

const setUsers = users => {
    return {
        type: SET_USERS,
        payload: users
    }
}

export const toggleFollow = id => {
    return {
        type: TOGGLE_FOLLOW,
        payload: id
    }
};

export const changedCurrentPage = numberPage => {
    console.log(numberPage)
    return {
        type: CHANGED_CURRENT_PAGE,
        payload: +numberPage
    }
}

export const getUsersTotalCount = () => {
    return async dispatch => {
        const data = await usersAPI.getTotalCount();
        dispatch(setUsersTotalCount(data.data.totalCount))
    }
}

export const getUsers = (currentPage, pageSize) => {
    return async dispatch => {
        const data = await usersAPI.getUsers(currentPage, pageSize);
        dispatch(setUsers(data.data.items))
    }
}

export default usersReducer;