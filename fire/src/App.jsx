import { useEffect, useState } from 'react'


import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Swal from 'sweetalert2'

import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore';
import { db } from './Firebase/firebase'

function App() {


  const [email, setemail] = useState("")

  const [password, setpassword] = useState("")

  const [submit, setsumbit] = useState(null)

  const [data, setData] = useState([])

  const usercollection = collection(db, "user")




  const getsome = async () => {


    let data = await getDocs(usercollection)

    let arr = data.docs.map((el) => {

      return { id: el.id, ...el.data() };

    })

    setData(arr)
    console.log(arr);

  }



  useEffect(() => {

    getsome();


  }, [])



  const handleDelete = async (id) => {

    const data = doc(db, "user", id)
    await deleteDoc(data)


    Swal.fire({
      icon: "success",
      title: "Success",
      text: "Delete Successfully Done....",

    });




    getsome();


  }

  const handleEdit = (id) => {


    console.log(id);
    setsumbit(id)
    data.map((el) => {

      console.log(el);

      if (el.id == id) {
        setemail(el.email)
        setpassword(el.password)

      }


    })





  }
  const handlesumbit = async (e) => {

    e.preventDefault();

    let obj = {

      email: email,
      password: password
    }








    if (submit != null) {


      const userDoc = doc(db, "user", submit)


      const updatedata = {


        email: email,
        password: password


      }

      await updateDoc(userDoc, updatedata)


      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Update Successfully ....",

      });

    }
    else {
      await addDoc(usercollection, obj)




      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Login Successfully Done....",

      });

    }

    setemail("")
    setpassword("")
    getsome();





  }



  return (
    <>
      <form action="" onSubmit={handlesumbit}>
        <fieldset>
          <legend>signup</legend>
          <input type="text" value={email} name='email' onChange={(e) => setemail(e.target.value)} placeholder='enter your email' /><br /><br />
          <input type="text" value={password} name='password' onChange={(e) => setpassword(e.target.value)} placeholder='enter your password' /><br /><br />
          <input type="submit" value={submit != null ? "update" : "submit"} />

        </fieldset>
      </form>



      <table border={3} className='table table-striped'>

        <tr className='table table-danger table table-border'>
          <th >Id</th>
          <th>Email</th>
          <th>Password</th>
          <th>Action</th>
        </tr>
        {
          data.map((el) => {
            return (

              <>

                <tr className='table table-danger table table-border'>
                  <td>{el.id}</td>
                  <td>{el.email}</td>
                  <td>{el.password}</td>
                  <td>  <button onClick={() => handleDelete(el.id)}>Delete</button>

                  </td>
                  <td>
                    <button onClick={() => handleEdit(el.id)}>Edit</button>
                  </td>
                </tr>
              </>


            )
          })
        }

      </table>








    </>
  )
}

export default App
