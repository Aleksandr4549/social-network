import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './redux/store';
import './index.css';

ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App state={store.getState()} />
            </Provider>
        </BrowserRouter>,
    document.getElementById('root')
);

// If you want youh