






import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from "../firebase/Firebase"
import { Link } from 'react-router-dom'

import Swal from 'sweetalert2'

function Table() {
  const [data, setData] = useState([])

  const usercollection = collection(db, "products")

  const getdata = async () => {
    let data = await getDocs(usercollection)
    let arr = data.docs.map((el) => {
      return { id: el.id, ...el.data() };
    })
    setData(arr)
  }

  useEffect(() => {
    getdata();
  }, [])

  const handleDelete = async (id) => {
    const data = doc(db, "products", id)
    await deleteDoc(data)


    Swal.fire({
      icon: "success",
      title: "Success",
      text: "Deleted Successfully Done....",

    });



    getdata();
  }

  return (
    <div className='d'>
      <header className="topbar">
        <h1>Dashboard</h1>
        <div className="user-info">
          <p>Welcome, User</p>
          <a href="#">Logout</a>
        </div>
      </header>

      <div className='t'>
        {
          data.map((el) => {
            return (
              <div className='tb' key={el.id}>
                <img src={el.image} alt="" />
                <h3>Name: {el.name}</h3>
                <h4>Price: {el.price}</h4>
                <h5>Brand: {el.brand}</h5>
                <button className='btn btn-danger' onClick={() => handleDelete(el.id)}>Delete</button>
                <Link to={`/edit/${el.id}`} >
                  <button className='btn btn-primary'>Edit</button>
                </Link>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Table
