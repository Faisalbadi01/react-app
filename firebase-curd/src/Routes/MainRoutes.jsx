import React from 'react'

import Home from "../Pages/Home"

import Form from "../Pages/Form"
import Table from "../Pages/Table"
import { Route, Routes } from 'react-router-dom'
import Eddit from '../Pages/Eddit'
function MainRoutes() {
    return (
        <div>


            <Routes>

                <Route path='/h' element={<Home />}></Route>
                <Route path='/form' element={<Form />}></Route>
                <Route path='/tbl' element={<Table />} ></Route>
                <Route path='/edit/:id' element={<Eddit />} ></Route>

            </Routes>




        </div>
    )
}

export default MainRoutes