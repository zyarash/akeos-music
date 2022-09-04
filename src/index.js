/*
 *  filename: index.js
 **/

/** External imports **/
import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter,
    Route,
    Routes,
} from 'react-router-dom';

/** Project imports **/
import App from './App';
import Error from './Error';


ReactDOM.render((
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route exact path="/" component={App} />
                <Route component={Error} />
            </Routes> 
        </BrowserRouter>
    </React.StrictMode>),
    document.getElementById('root')
);
