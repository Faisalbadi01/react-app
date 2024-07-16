import { useState } from "react"
import "./Login.modules.css"
import { useNavigate } from "react-router-dom"

import Swal from 'sweetalert2'
const obj = {

  email: "",
  password: ""
}

function Contact() {


  const navigate = useNavigate()

  let [state, setstate] = useState(obj)

  const handlechange = (e) => {



    setstate({ ...state, [e.target.name]: e.target.value })

  }


  const handelclick = (e) => {


    e.preventDefault()

    setstate = ({

      email: "",
      password: ""
    })

    fetch('http://localhost:3000/faisal', {

      method: "POST",
      headers:
        { 'Content-Type': 'application/json' },

      body: JSON.stringify(state)


    })
      .then((res) => res.json)

      .then((res) => {
        console.log(res);
      })



    Swal.fire({
      icon: "success",
      title: "Success",
      text: "Login Successfully Done....",
      footer: '<a href="#">Why do I have this issue?</a>'
    });



    navigate("/login")
  }



  return (
    <>


      <div class="page-heading contact-heading header-text">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="text-content">
                <h4>Signup</h4>
                <h2>let’s get in touch</h2>
              </div>
            </div>
          </div>
        </div>
      </div>


      <body className="d">
        <br /><br /><br /><br /><br /><br />
        <div className="container border " >
          <div className="login-box fai">
            <h1>Singup</h1>
            <form action="#" method="POST" onSubmit={handelclick}>
              <div className="textbox">
                <label for="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Enter your email" required onChange={handlechange} className="form-control" />
              </div>
              <br />
              <div className="textbox">
                <label for="password">Password</label>
                <input type="password" id="password" name="password" placeholder="Enter your password" className="form-control" required onChange={handlechange} />
              </div>
              <br /><br />
              <button type="submit" className="tn form-control btn btn-primary">Sumbit</button><br /><br />
              <a href="" className="forgot ">Forgot Password?</a>
            </form>
          </div>
        </div>
      </body>

    </>
  )
}

export default Contact