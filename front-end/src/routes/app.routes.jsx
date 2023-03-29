import { Route, Routes } from 'react-router-dom'

import { Home } from '../pages/Home/index'
import { New } from '../pages/New/index'
import { Details } from '../pages/Details/index'
import { Profile } from '../pages/Profile/index'

export function AppRoutes() {

    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/new' element={<New />} />
            <Route path='/Details/:id' element={<Details />} />
        </Routes>
    )
}