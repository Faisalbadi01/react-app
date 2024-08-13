
import { addDoc, collection } from 'firebase/firestore'
import React, { useState } from 'react'
import { db } from '../firebase/Firebase'




function Form() {


  const [name, setname] = useState("")
  const [price, setprice] = useState("")
  const [brand, setbrand] = useState("")
  const [image, setimage] = useState("")

  const usercollection = collection(db, "products")








  


  const handlesumbit = async (e) => {

    e.preventDefault();

    let obj = {

      name: name,
      price: price,
      brand: brand,
      image: image


    }



    let d = await addDoc(usercollection, obj)


    // console.log(d);


    alert("data added")



    setname("")
    setimage("")
    setprice("")
    setbrand("")

  }



  return (
    <div>

      <div className='d'>
        <header class="topbar">
          <h1>Dashboard</h1>
          <div class="user-info">
            <p>Welcome, User</p>
            <a href="#">Logout</a>
          </div>
        </header>

        <br /><br />
        <h1>Add Product</h1>
        <br /><br />
        <form action="" onSubmit={handlesumbit}>

          <input type="text" value={name} className='form-control' placeholder='name' onChange={(e) => setname(e.target.value)} name='name' /><br />
          <input type="text" value={price} className='form-control' placeholder='price' onChange={(e) => setprice(e.target.value)} name='price' /><br />
          <input type="text" value={brand} className='form-control' placeholder='brand' onChange={(e) => setbrand(e.target.value)} name='brand' /><br />
          <input type="text" value={image} className='form-control' placeholder='url' onChange={(e) => setimage(e.target.value)} name='image' /><br />
          <input type="submit" className='form-control btn btn-primary' />

        </form>


      </div>


    </div>
  )
}

export default Form