/*
 *  filename: src/home/index.js
 **/

/** External imports **/
import React from 'react';
import { 
    createRoot
} from 'react-dom/client';
import {
    BrowserRouter,
    Route,
    Routes,
} from 'react-router-dom';

/** Project imports **/
import App from './App';
import Error from './Error';


const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />} />
                <Route element={<Error />} />
            </Routes> 
        </BrowserRouter>
    </React.StrictMode>
);
