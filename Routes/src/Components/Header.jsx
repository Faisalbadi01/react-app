import React from 'react'
import "./Header.css"
import { NavLink } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';

function Header() {
    return (
        <div>

            <Nav id='header'

            >
                <img src="https://uploads.vw-mms.de/system/production/images/vwn/030/145/images/7a0d84d3b718c9a621100e43e581278433114c82/DB2019AL01950_web_1600.jpg?1649155356" alt="" height={90} width={100} />
                <Nav.Item>
                    <NavLink to="/" id='main' activeClassName="active" >Home</NavLink>
                </Nav.Item>

                <Nav.Item>
                    <NavLink to="/Pro" id='main' eventKey="link-2" activeClassName="active">Product</NavLink>
                </Nav.Item>
                <Nav.Item>
                    <NavLink to="/abt" id='main' eventKey="link-1" activeClassName="active">About</NavLink>
                </Nav.Item>
                <Nav.Item>
                    <NavLink id='main' to="/con">
                        Singup
                    </NavLink>
                </Nav.Item>
            </Nav>

        </div>
    )
}

export default Header