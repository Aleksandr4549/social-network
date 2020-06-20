import React from 'react';
import { reduxForm } from 'redux-form';
import { Field } from 'redux-form';

import Input from '../CustomFormFields/Input/Input';
import { required } from '../../utils/validators/validators';

import style from '../CustomFormFields/Input/Input.module.scss'

const LoginForm = props => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field 
                    type="email" 
                    placeholder="email" 
                    name='email' 
                    component={Input} 
                    validate={[required]}
                />
            </div>
            <div>
                <Field 
                    type="password" 
                    placeholder="password" 
                    name='password' 
                    component={Input} 
                    validate={[required]}
                />
            </div>
            <div>
                <Field type="checkbox" name='rememberMe' component='input' /> remember me
            </div>
            {props.error && <div className={style.error}>{props.error}</div>}
            <button type="submit">Submit</button>
        </form>
    );
};

const ContactForm = reduxForm({
    form: 'loginForm',
    fields: ['email', 'password', 'rememberMe']
  })(LoginForm);

export default ContactForm;