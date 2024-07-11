import React, { useState } from 'react'

const Product = () => {
    

    let [show,setshow]=useState(false)

    let [state,setstate]=useState({

        title :"",
        img : "",
        price : ""
    })


    let [arr,setarr]=useState([]);
function handlechange(e) {



    let {name,value} = e.target
    
    setstate({
         ...state,
         [name] :value
    })

    console.log(state);
}

function handelclick() {
    
    setarr([...arr,state])



}

console.log(arr);




  return (
   <div>
        <h1>product</h1>

        <input type="text" id='t' name='title' placeholder='enter product title' onChange={handlechange} /> <br /><br />
        <input type="text" name='img' placeholder='enter product image' onChange={handlechange} /> <br /><br />
        <input type="text" name='price' placeholder='enter product price' onChange={handlechange} /> <br /><br />
        <button onClick={handelclick}>Summit</button>
        <button onClick={()=>setshow(!show)}>show</button>

      
<div>
 

{show ? arr.map((val)=>{

return(

<div>

<div class="card" >
  <img src={val.img} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{val.title}</h5>
    <p class="card-text">{val.price}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

</div>


)


})
:
<div>
    <h1>add product</h1>
</div>

}



</div>

        

    </div> 
    



  )
}

export default Product