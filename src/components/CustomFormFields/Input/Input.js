import React from 'react';

import style from './Input.module.scss';

const Input = ({input, placeholder, type, meta: {touched, error}}) => {
    const hasError = touched && error;
    console.log(error)
    return (
        <div>
            <input 
                className={hasError ? style.error : ''}
                {...input} 
                placeholder={placeholder} 
                type={type} error={error} 
                touched={touched} 
            />
            {hasError && <div className={style.error}>{error}</div>}
        </div>
    );
};

export default Input;