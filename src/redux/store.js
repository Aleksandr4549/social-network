import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import {reducer as formReducer} from "redux-form";

import profileReducer from './reducers/profile-reducer';
import usersReducer from './reducers/users-reducer';
import authReducer from './reducers/auth-reducer';

const rootReducer = combineReducers({
    profile: profileReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;