import React from 'react';

import style from './Input.module.scss';

const Input = ({input, placeholder, type, meta: {touched, error}}) => {
    const hasError = error && touched;

    return (
        <div>
            <input 
                className={!hasError ? '' : style.error}
                {...input} 
                placeholder={placeholder} 
                type={type} 
                error={error} 
            />
            {hasError && <div className={style.error}>{error}</div>}
        </div>
    );
};

export default Input;