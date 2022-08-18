import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home';
import Portfolio from './Portfolio';
function RoutesConfig() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
            </Routes>
            


            <Routes>
                <Route path='/Portfolio' element={<Portfolio />}/>
            </Routes>
            
        </BrowserRouter>
    );
}

export default RoutesConfig