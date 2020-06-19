import React from 'react';
import { reduxForm } from 'redux-form';
import { Field } from 'redux-form';

import Input from '../CustomFormFields/Input/Input';
import { maxLength, required } from '../../utils/validators/validators';

const maxLength10 = maxLength(10);

const LoginForm = props => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field 
                    type="email" 
                    placeholder="email" 
                    name='email' 
                    component={Input} 
                    validate={[maxLength10, required]}
                />
            </div>
            <div>
                <Field 
                    type="password" 
                    placeholder="password" 
                    name='password' 
                    component={Input} 
                    validate={[maxLength10, required]}
                />
            </div>
            <div>
                <Field type="checkbox" name='rememberMe' component='input' /> remember me
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

const ContactForm = reduxForm({
    form: 'loginForm',
    fields: ['email', 'password', 'rememberMe']
  })(LoginForm);

export default ContactForm;