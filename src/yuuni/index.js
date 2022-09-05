/*
 *  filename: src/yuuni/index.js
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
import Error from 'Components/Error';

import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path='/yuuni' element={<App />} />
                <Route element={<Error />} />
            </Routes> 
        </BrowserRouter>
    </React.StrictMode>
);
