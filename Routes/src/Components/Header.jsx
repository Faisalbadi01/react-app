import React from 'react'
import "./Header.css"
import { NavLink, useNavigate } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';

function Header() {

    const navigate = useNavigate();

    const lug = () => {


        localStorage.clear()

        navigate("/con")

    }

    return (
        // <div>

        //     <Nav id='header'

        //     >
        //         <img src="https://uploads.vw-mms.de/system/production/images/vwn/030/145/images/7a0d84d3b718c9a621100e43e581278433114c82/DB2019AL01950_web_1600.jpg?1649155356" alt="" height={90} width={100} />
        //         <Nav.Item>
        //             <NavLink to="/" id='main' activeClassName="active" >Home</NavLink>
        //         </Nav.Item>

        //         <Nav.Item>
        //             <NavLink to="/Pro" id='main' eventKey="link-2" activeClassName="active">Product</NavLink>
        //         </Nav.Item>
        //         <Nav.Item>
        //             <NavLink to="/abt" id='main' eventKey="link-1" activeClassName="active">About</NavLink>
        //         </Nav.Item>
        //         <Nav.Item>
        //             <NavLink id='main' to="/con">Singup</NavLink>
        //                 
        //             
        //         </Nav.Item>

        //         <Nav.Item>
        //             <button className='btn btn-primary b' onClick={lug}>Logout</button>
        //         </Nav.Item>
        //     </Nav>

        // </div>

        // <div>
        //     <header id="page-header">
        //         <div class="site-name">📜 Shadow Scrolls</div>
        //         <nav>
        //             <ul class="menu" role="list">
        //                 <li><NavLink to="/" id='main' activeClassName="active" >Home</NavLink></li>
        //                 <li>  <NavLink to="/Pro" id='main' eventKey="link-2" activeClassName="active">Product</NavLink></li>
        //                 <li> <NavLink to="/abt" id='main' eventKey="link-1" activeClassName="active">About</NavLink></li>
        //                 <li> <NavLink id='main' to="/con">Singup</NavLink></li>
        //                 <li>   <button className='btn btn-primary b' onClick={lug}>Logout</button></li>

        //             </ul>
        //         </nav>
        //     </header>

        // </div>

        // <div>
        //     <div class="main-container">
        //         <div class="blur-circle1">

        //         </div>
        //         <div class="blur-circle2">

        //         </div>

        //         <div class="landing-page">
        //             <header>
        //                 <div class="container">
        //                     <a href="#" class="logo">Your <b>Website</b></a>
        //                     <ul class="links">
        //                         <li><NavLink to="/" id='main' activeClassName="active" >Home</NavLink></li>
        //                         <li>  <NavLink to="/Pro" id='main' eventKey="link-2" activeClassName="active">Product</NavLink></li>
        //                         <li>     <NavLink to="/abt" id='main' eventKey="link-1" activeClassName="active">About</NavLink></li>
        //                         <li><NavLink id='main' to="/con">Singup</NavLink></li>
        //                         <li><button className='btn btn-primary b' onClick={lug}>Logout</button></li>
        //                     </ul>
        //                 </div>
        //             </header>
        //             {/* <div class="content">
        //                 <div class="container">
        //                     <div class="info">
        //                         <h1>Looking For Inspiration</h1>
        //                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus odit nihil ullam nesciunt quidem iste, Repellendus odit nihil</p>
        //                         <button>Button name</button>
        //                     </div>
        //                     <div class="image">
        //                         <img class="main-image" src="https://cdni.iconscout.com/illustration/premium/thumb/businessman-working-using-vr-tech-3840669-3202986.png?f=webp" />
        //                     </div>
        //                 </div>
        //             </div> */}
        //         </div>

        //     </div>
        // </div>

        <div>
            <header class="">
                <nav class="navbar navbar-expand-lg">
                    <div class="container">
                        <a class="navbar-brand" href=""><h2>Sixteen <em>Clothing</em></h2></a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarResponsive">
                            <ul class="navbar-nav ml-auto">
                                <li class="nav-item active">
                                    <a class="nav-link" href="index.html"> <NavLink to="/" id='main' activeClassName="active" >Home</NavLink>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="products.html">       <NavLink to="/Pro" id='main' eventKey="link-2" activeClassName="active">Product</NavLink>   </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="about.html">    <NavLink to="/abt" id='main' eventKey="link-1" activeClassName="active">About</NavLink></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="contact.html">    <NavLink id='main' to="/con">Singup</NavLink></a>
                                </li>
                                <li class="nav-item">
                                    <button className='btn btn-primary b' onClick={lug}>Logout</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>

        </div>
    )
}

export default Header