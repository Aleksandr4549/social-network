import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import profileReducer from './reducers/profile-reducer';
import usersReducer from './reducers/users-reducer';

const rootReducer = combineReducers({
    profile: profileReducer,
    usersPage: usersReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;