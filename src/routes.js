import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home';
import Split from './Split';
import Query from './Query'

function RoutesConfig() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
            </Routes>
            <Routes>
                <Route path='/Split' element={<Split />} />
            </Routes>
            <Routes>
                <Route path='/Query' element={<Query />} />
            </Routes>
            
        </BrowserRouter>
    );
}

export default RoutesConfig