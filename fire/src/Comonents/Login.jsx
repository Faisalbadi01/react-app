import { collection, getDocs } from 'firebase/firestore'
import React, { useEffect } from 'react'
import { db } from '../Firebase/firebase'

function Login() {

    const usercollection = collection(db, "user")


    const getsome = async () => {

        let data = await getDocs(usercollection)


        let arr = data.docs.map((el) => {


            return { id: el.id, ...el.data() }
        })
        console.log(arr);

    }

    useEffect(() => {


        getsome();
    }, [])

    return (
        <div>


        </div>
    )
}

export default Login