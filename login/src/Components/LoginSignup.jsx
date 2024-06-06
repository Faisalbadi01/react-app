import { useState } from "react"

function LoginSingup() {
 
    let  [state,setstate]=useState(true)

    let [name,setname]=useState("")
    let [email,setemail]=useState("")
    let [pass,setpass]=useState("")
    const [loginEmail,setLEmail] = useState("")
    const [loginpass,setLoginpass] = useState("")

let [arr,setarr]=useState([])

    function handelclick() {
        
let obj={

    name : name,
    email : email,
    pass : pass
}

setarr([...arr,obj])

    }
    
console.log(arr);



const handleLoginClick =()=>{
    let data = arr.filter((el)=>{
        return el.email == loginEmail && el.pass == loginpass
    })
    if(data.length>0){
        alert("Login Successfull");
    }else{
        alert("Login Unsuccessfull")
    }
}



    return(
        
        <>
        
        {
            state ?<div>


    <h2>Sign Up</h2>

    <input type="text" name="name" onChange={(val)=>{setname(val.target.value)}} placeholder="Your Name"/>
    <input type="email" name="email" onChange={(val)=>{setemail(val.target.value)}} placeholder="Your Email"/>
    <input type="password" name="password" onChange={(val)=>{setpass(val.target.value)}} placeholder="Password"/>

    <button type="submit" onClick={handelclick}>Sign Up</button>


  <div class="login-link">
    <p onClick={()=>{setstate(false)}} >I already have an account.</p>
  </div>




            </div>   : <div>


            <div class="container">
  <div class="card">
    <h2>Login</h2>
    
      <input type="text" id="username" name="username" onChange={(e)=>setLEmail(e.target.value)} placeholder="Username" required />
      <input type="password" id="password" name="password" onChange={(e)=>setpass(e.target.value)} placeholder="Password" required />
      <button type="submit" onClick={handleLoginClick}>Login</button>

  </div>
</div>

            </div>
        }
        
        </>
    )

}

export default LoginSingup