import React, { children } from 'react'
import { Navigate } from 'react-router-dom';

function Privateroute({ children }) {


    const pri = false;


    return (


        localStorage.getItem("islogin", pri) ? children : <Navigate to={"/con"}></Navigate>

    )
}

export default Privateroute