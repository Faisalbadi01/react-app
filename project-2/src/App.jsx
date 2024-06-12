import logo from './logo.svg';
import './App.css';

import axios from 'axios';
import Api from './Component/Api';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {


  
const [state,setstate]=useState(true)

  const [arr,setrArr]= useState([])


  useEffect(()=>{


    axios('https://randomuser.me/api/')
    .then((res)=>{

      setrArr(res.data.results)
    })

  },[state])

console.log(arr);

console.log(state);
  return (
    <div className="App">

     
       
        <Api sub={arr}/>
      
   
    <br />
    <button className='btn btn-danger' onClick={()=>{setstate(!state)}}>click</button>
    </div>
  );
}

export default App;
