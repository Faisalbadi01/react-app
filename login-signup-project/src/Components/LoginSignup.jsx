import React, { useState } from 'react'

import Swal from 'sweetalert2'


let obj={

  name :"",
  email :"",
  password : "",
}


const LoginSignup = () => {


   const [state,setstate]=useState(true)

    const [box,setbox]=useState(obj)

    let [name,setname]=useState("")
    let [email,setemail]=useState("")
    let [pass,setpass]=useState("")
    const [loginEmail,setLEmail] = useState("")
    const [loginpass,setLoginpass] = useState("")

    const [valid,setvalid]=useState()

    const [sshow,setsshow]=useState('password')

let [arr,setarr]=useState([])



    function handelclick(e) {

      e.preventDefault()
        


setarr([...arr,box])
setbox(obj)


    }
    
const handelchange=(e)=>{
  let {name,value} = e.target
setbox({...box,[name] : value})

}


console.log(arr);

const show=()=>{
  setsshow((prevType) => (prevType === 'password' ? 'text' : 'password'));
  }

  const handleblur=()=>{

    const em=/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

if (!em.test(box.email)) {
  
setvalid(true)

}
else{
  setvalid(false)
}


  }


  const handleblurps=()=>{

    if (box.password.length >8) {
      setvalid(true)
  }
  else{
      setvalid(false)
  }

  }


const handleLoginClick =()=>{
    let data = arr.filter((el)=>{
     
    })
    if(data.email === box.email && data.password === box.password){
      Swal.fire({
        title: 'success',
        text: 'Do you want to continue',
        icon: 'success',
        confirmButtonText: 'Cool'
      })
 
    }else{
 

      Swal.fire({
        title: 'error!',
        text: 'Do you want to continue',
        icon: 'error',
        confirmButtonText: 'Cool'
      })
    }
}



    return(
        
        <>
        
        {
            state ?<div>


    {/* <h2>Sign Up</h2>

    <input type="text" name="name" onChange={(val)=>{setname(val.target.value)}} placeholder="Your Name"/>
    <input type="email" name="email" onChange={(val)=>{setemail(val.target.value)}} placeholder="Your Email"/>
    <input type="password" name="password" onChange={(val)=>{setpass(val.target.value)}} placeholder="Password"/>

    <button type="submit" onClick={handelclick}>Sign Up</button>


  <div class="login-link">
    <p onClick={()=>{setstate(false)}} >I already have an account.</p>
  </div>

 */}





  <section class="background-texture"></section>
  <div class="card-container">
    <h2>Create Account</h2>
    <form class="form" onSubmit={handelclick}>
      <input type="text" name='name'  value={box.name} onChange={handelchange} placeholder="Name" />
      <input type='email' name='email' value={box.email} className={valid ? "a" : "" } onChange={handelchange} onBlur={handleblur} placeholder="Email" />
      <input type={sshow} name='password' value={box.password} className={valid ? "a" : ""} onChange={handelchange} onBlur={handleblurps}  placeholder="Password" /><i class="bi bi-eye-fill"  id="sss" onClick={show} ></i>
      {valid ? <p>Password Must Be 8 letter and special character</p> :""}
      <button type="submit">SIGN UP</button>
    </form>
    <footer>
    <p >I already have an account.</p>
    <span className='s' onClick={()=>{setstate(false)}} >Signup Here</span>
    </footer>
  </div>



            </div>   : <div>


            {/* <div class="container">
  <div class="card">
    <h2>Login</h2>
    
      <input type="text" id="username" name="username" onChange={(e)=>setLEmail(e.target.value)} placeholder="Username" required />
      <input type="password" id="password" name="password" onChange={(e)=>setpass(e.target.value)} placeholder="Password" required />
      <button type="submit" onClick={handleLoginClick}>Login</button>

  </div>
</div> */}


<div class="container">
        <div class="signin-form">
            <h2>Sign In</h2>
            <form>
                <div class="input-group">
                    <label for="username">Username</label>
                    <input type="text" id="username"  value={box.name}  className={valid ? "a" : "" }  onChange={handelchange} name="name"  onBlur={handleblur}/>
                </div>
                <div class="input-group">
                    <label for="password">Password</label>
                    <input type={sshow} id="password"  value={box.password}  onChange={handelchange} name="password"  onBlur={handleblurps}  /  ><i class="bi bi-eye-fill"  id="ssss" onClick={show} ></i>
                </div>
                <button type="submit"  onClick={handleLoginClick} >Sign In</button>
            </form>
        </div>
    </div>


            </div>
        }
        
        </>
    )
  
}

export default LoginSignup