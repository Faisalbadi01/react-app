import React, { useState } from 'react'

let  main={

    email : "",
    password : ""
}


function Validation() {


    const [state,setstate]=useState(main)
   
    const [arr,setarr] = useState([])

const [valid,setvalid] = useState(true);

const [sshow,setsshow]=useState('password')

const handlechange=(e)=>{

let {name,value} = e.target
setstate({...state,[name] : value})

}

const handelsumbit=(e)=>{

e.preventDefault();

setarr([...arr,state])
setstate(main)

}

const show=()=>{
setsshow((prevType) => (prevType === 'password' ? 'text' : 'password'));
}

const handleblur=()=>{

    if (state.password.length >8) {
        setvalid(true)
    }
    else{
        setvalid(false)
    }


}

console.log(arr);

  return (
    <div>


<div class="container">
  <header class="row text-center">
    <div class="col log">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Goodreads_logo.svg/2560px-Goodreads_logo.svg.png" alt="goodreads-logo" />
    </div>
  </header>
  <main class="main row">
    <div class="left col">
      <img src="https://img.freepik.com/premium-vector/young-woman-enjoy-sitting-reading-book-hygge-concept-vector-illustration_194708-2078.jpg" alt="girl-reading-a-book" />
    </div>
    <div class="right col">
      <form class="sign-up" onSubmit={handelsumbit} >
        <h4>Find your next favorite book!</h4>
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input type="email" class="form-control" value={state.email} name='email' id="email" onChange={handlechange} placeholder="Enter your email"/>
        </div>
        <div class="mb-3">       
          <label for="password" class="form-label">Password</label>
          <input type={sshow}  className="form-control"  value={state.password} id="password" name='password' onChange={handlechange} onBlur={handleblur} placeholder="Create a password"  /><i class="bi bi-eye" id='w' onClick={show}></i>
          {valid ? "" :<p>Password Must Be 8 letter</p>}
        </div>
        <button type="submit" class="btn submit-btn" style={{background : " #ea4335"}} >Create account</button>
      </form>
      <p class="hr-lines"> OR </p>
      <div class="social-sign-up">
        <button class="btn social" style={{background : " #ea4335"}}><i class="fa-brands fa-google" ></i> Sign up with Google</button>
      </div>
      <div class="sign-in">
        <p>Already have an account? <a href="#">Log in</a></p>
      </div>
    </div>
  </main>
</div>

    </div>
  )
}

export default Validation