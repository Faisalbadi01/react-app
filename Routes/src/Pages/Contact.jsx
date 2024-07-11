import { useState } from "react"
import "./Login.modules.css"
import { useNavigate } from "react-router-dom"


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


    navigate("/login")
  }



  return (
    <>


      <body className="d">
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <div className="container " >
          <div className="login-box fai">
            <h1>Singup</h1>
            <form action="#" method="POST" onSubmit={handelclick}>
              <div className="textbox">
                <label for="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Enter your email" required onChange={handlechange} />
              </div>
              <div className="textbox">
                <label for="password">Password</label>
                <input type="password" id="password" name="password" placeholder="Enter your password" required onChange={handlechange} />
              </div>
              <button type="submit" className="tn">Sumbit</button>
              <a href="" className="forgot">Forgot Password?</a>
            </form>
          </div>
        </div>
      </body>

    </>
  )
}

export default Contact