import React, { useState } from 'react'
import Swal from 'sweetalert2'
import './Login.modules.css'
import { useNavigate } from 'react-router-dom'


const obj = {

    email: "",
    password: ""
}


export default function Login() {

    const navigate = useNavigate()

    let [state, setstate] = useState(obj)

    const handlechange = (e) => {



        setstate({ ...state, [e.target.name]: e.target.value })

    }


    const handelclick = (e) => {


        e.preventDefault()

        if (state.email) {


            fetch(`http://localhost:3000/faisal?email=${state.email}`)
                .then((res) => res.json())
                .then((res) => {
                    console.log(res);

                    if (res[0].password == state.password) {



                        Swal.fire({
                            icon: "success",
                            title: "Success",
                            text: "Login Successfully Done....",
                            footer: '<a href="#">Why do I have this issue?</a>'
                        });




                        localStorage.setItem("islogin", true)
                        navigate("/abt")


                    }
                    else {

                        Swal.fire({
                            icon: "error",
                            title: "Oops...",
                            text: "Something went wrong!",

                        });
                    }

                })
                .catch((err) => {
                    console.log(err);
                })
        }
    }





    return (
        <>

            <div class="page-heading contact-heading header-text">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="text-content">
                                <h4>Login</h4>
                                <h2>let’s get in touch</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <body><br /><br /><br /><br /><br />
                <div class="container border border">
                    <div class="login-box fais">
                        <h1>Login</h1>
                        <form action="" onSubmit={handelclick}>
                            <div class="textbox">
                                <label for="email">Email</label>
                                <input type="email" id="email" name="email" onChange={handlechange} className='form-control' placeholder="Enter your email" required />
                            </div><br />
                            <div class="textbox">
                                <label for="password">Password</label>
                                <input className='form-control' type="password" id="password" name="password" onChange={handlechange} placeholder="Enter your password" required />
                            </div><br /><br />
                            <button type="submit" class="tn form-control btn btn-danger">Login</button>
                            <br /><br />
                            <a href="" class="forgot">Forgot Password?</a>
                        </form>
                    </div>
                </div>
            </body>


        </>
    )
}
