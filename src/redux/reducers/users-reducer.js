const SET_USERS = 'SET_USERS';
const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW';

const initialState = {
    users: [{
        id: 0,
        name: 'John', 
        country: 'Russia',
        city: 'Moscow',
        status: 'haha',
        isFollow: false,
        avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQteJqiwRZ7HbDPSiQ48m9DqxWrSkRkj0YQRwkWbxkKUcYwmWOh&usqp=CAU'
    },
    {
        id: 1,
        name: 'Bill', 
        country: 'Russia',
        city: 'Moscow',
        status: '',
        isFollow: false,
        avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQteJqiwRZ7HbDPSiQ48m9DqxWrSkRkj0YQRwkWbxkKUcYwmWOh&usqp=CAU'
    },
]};

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USERS: 
            return {...state, users: [...state.users, ...action.payload]}
        case TOGGLE_FOLLOW:
            return {
                ...state, 
                users: state.users.map(user => user.id === action.payload ? {...user, isFollow: !user.isFollow} : user)
            }
        default:
            return state;
    }
};

export const setUsers = users => {
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

export default usersReducer;