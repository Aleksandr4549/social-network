import usersAPI from '../../api/users-api';
import followedAPI from '../../api/followed-api';

const SET_USERS = 'SET_USERS';
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT';
const CHANGED_CURRENT_PAGE = 'CHANGED_CURRENT_PAGE';
const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW';
const TOGGLE_UNFOLLOW = 'TOGGLE_UNFOLLOW';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

const initialState = {
    users: [],
    usersTotalCount: null,
    pageSize: 10,
    currentPage: 1,
    isFetching: false
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
                users: state.users.map(user => user.id === action.payload ? {...user, followed: true} : user)
            }
        case TOGGLE_UNFOLLOW:
            return {
                ...state, 
                users: state.users.map(user => user.id === action.payload ? {...user, followed: false} : user)
            }
        case CHANGED_CURRENT_PAGE:
            return {...state, currentPage: action.payload}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: !state.isFetching}
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

const toggleFollow = id => {
    return {
        type: TOGGLE_FOLLOW,
        payload: id
    }
};

const toggleUnfollow = id => {
    return {
        type: TOGGLE_UNFOLLOW,
        payload: id
    }
};

const toggleIsFetching = () => {
    return {
        type: TOGGLE_IS_FETCHING
    }
};

export const changedCurrentPage = numberPage => {
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
        dispatch(toggleIsFetching())
        const data = await usersAPI.getUsers(currentPage, pageSize);
        dispatch(setUsers(data.data.items))
        dispatch(toggleIsFetching())
    }
}

export const follow = id => {
    return async dispatch => {
        dispatch(toggleIsFetching())
        await followedAPI.follow(id);
        dispatch(toggleFollow(id))
        dispatch(toggleIsFetching())
    }
}

export const unfollow = id => {
    return async dispatch => {
        dispatch(toggleIsFetching())
        await followedAPI.unfollow(id);
        dispatch(toggleUnfollow(id))
        dispatch(toggleIsFetching())
    }
}

export default usersReducer;