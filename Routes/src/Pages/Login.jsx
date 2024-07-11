import React, { useState } from 'react'

import './Login.modules.css'


const obj = {

    email: "",
    password: ""
}


export default function Login() {



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


                        alert("login successfully")
                        localStorage.setItem("islogin", true)

                    }
                    else {

                        alert("wrong password")
                    }

                })
                .catch((err) => {
                    console.log(err);
                })
        }
    }





    return (
        <>

            <body><br /><br /><br /><br /><br /><br /><br /><br />
                <div class="container">
                    <div class="login-box fais">
                        <h1>Login</h1>
                        <form action="" onSubmit={handelclick}>
                            <div class="textbox">
                                <label for="email">Email</label>
                                <input type="email" id="email" name="email" onChange={handlechange} placeholder="Enter your email" required />
                            </div>
                            <div class="textbox">
                                <label for="password">Password</label>
                                <input type="password" id="password" name="password" onChange={handlechange} placeholder="Enter your password" required />
                            </div>
                            <button type="submit" class="tn">Login</button>
                            <a href="" class="forgot">Forgot Password?</a>
                        </form>
                    </div>
                </div>
            </body>


        </>
    )
}
