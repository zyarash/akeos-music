/*
 *  filename: src/home/index.js
 *  background: -
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

/** Project imports - JS **/
import Error from 'Components/Error';

import App from './App';

/** Project imports - CSS **/
import 'CSS/global.scss';
import 'CSS/home/index.scss';

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
