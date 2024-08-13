import React from 'react'
import { NavLink } from 'react-router-dom'


function Header() {
    return (
        <div>



            <body>
                <div class="dashboard-container">
                    <nav class="sidebar">
                        <div class="sidebar-header">
                            <h2>Menu</h2>
                        </div>
                        <ul class="sidebar-menu">
                            <li> <NavLink to="/h" id='main' activeClassName="active" >Home</NavLink></li>
                            <li> <NavLink to="/form" id='main' activeClassName="active" >Form</NavLink></li>
                            <li><NavLink to="/tbl" id='main' activeClassName="active" >Table</NavLink></li>
                            <li><NavLink to="/edit" id='main' activeClassName="active" >Edit</NavLink></li>
                            <li><a href="#">Reports</a></li>
                            <li><a href="#">Settings</a></li>
                        </ul>
                    </nav>

                </div>
                <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js"></script>
                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
            </body >

        </div>
    )
}

export default Header