import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/app';
import reportWebVitals from './reportWebVitals';

import { Provider } from "react-redux";
import {socketMiddleware} from "./services/middleware/socketMiddleware";
import {rootReducer} from './services/reducers';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk';

const enhancer = composeWithDevTools(applyMiddleware(thunk, socketMiddleware()));

export const store = createStore(rootReducer, enhancer);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
