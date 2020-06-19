import React from 'react';
import { connect } from 'react-redux';

import LoginForm from './LoginForm';
import { login } from '../../redux/reducers/auth-reducer';
import style from './Login.module.scss';

const Login = props => {
    const login = (p) => console.log(p)
    return (
        <div className={style.login__container}>
            <h3>Login</h3>
            <LoginForm onSubmit={props.login} />
        </div>
    );
};

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps, {login})(Login);