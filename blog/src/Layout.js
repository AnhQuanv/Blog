import React from 'react'
import {
    Routes,
    Route,
} from "react-router-dom";

import App from './App';
import DashBoard from './pages/User/DashBoard';
import UpgradeGuide from './pages/User/UpgradeGuide';
import MainContent from './components/MainContent';

const Layout = () => {
    return (
        <Routes>
            <Route path='/' element={<App />}>
                <Route path='/' element={<MainContent />}>
                    <Route index element={<DashBoard />} />
                    <Route path='/upgrade' element={<UpgradeGuide />} />
                    <Route path='/contributions' element={<DashBoard />} />
                </Route>
            </Route>

        </Routes>
    )
}

export default Layout
