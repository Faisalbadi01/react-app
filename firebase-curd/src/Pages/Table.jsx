import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'

import { db } from "../firebase/Firebase"
import { NavLink } from 'react-router-dom'

function Table() {


  const [name, setname] = useState("")
  const [price, setprice] = useState("")
  const [brand, setbrand] = useState("")
  const [image, setimage] = useState("")

  const [data, setData] = useState([])

  const [submit, setsumbit] = useState(null)

  const usercollection = collection(db, "products")



  const getdata = async () => {

    let data = await getDocs(usercollection)


    let arr = data.docs.map((el) => {

      return { id: el.id, ...el.data() };

    })
    setData(arr)
    console.log(arr);
  }

  useEffect(() => {

    getdata();


  }, [])



  const handleDelete = async (id) => {


    const data = doc(db, "products", id)

    await deleteDoc(data)

    alert("deleted")


    getdata();
  }


 


  return (
    <div>



      <div className='ds'>


        <header class="topbar">
          <h1>Dashboard</h1>
          <div class="user-info">
            <p>Welcome, User</p>
            <a href="#">Logout</a>
          </div>
        </header>



      </div>


      <div className='t'>


        {
          data.map((el) => {

            return (

              <>
                <div className='tb'>

                  <img src={el.image} alt="" />
                  <br /><br />
                  <h3>Name :- {el.name}</h3>
                  <h4>Price :- {el.price}</h4>

                  <h5> Brands :-{el.brand}</h5>

                  <button className='btn btn-danger' onClick={() => handleDelete(el.id)}>Delete</button>
                  {/* <button className='btn btn-success' onClick={() => handleEdit(el.id)}>Edit</button> */}

                  <button><NavLink to="/edit" id='main' activeClassName="active" >Edit</NavLink></button>
                </div>
              </>
            )

          })
        }




      </div>


    </div>
  )
}

export default Table