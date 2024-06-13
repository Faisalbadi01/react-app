import logo from './logo.svg';
import './App.css';

import axios from 'axios';
import Api from './Component/Api';
import { useState } from 'react';
import { useEffect } from 'react';
import BeatLoader from "react-spinners/BeatLoader";

function App() {


  
const [state,setstate]=useState(true)

  const [arr,setrArr]= useState([])


  const fetch =()=>{

    setstate(true);
    axios('https://randomuser.me/api/')
    .then((res)=>{

      setrArr(res.data.results)
      setstate(false)
    })

  }

  useEffect(()=>{

fetch();
   
  },[])

console.log(arr);

console.log(state);
  return (
    <div className="App"> <br /><br />
        <button className='btn btn-danger' onClick={fetch}>click</button>
 {
    state == true ?
    <div>
      <br /><br />  <BeatLoader

        color={'red'}
        loading={2000}
        // cssOverride={override}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      /></div>:
    <div>
           <Api sub={arr}/>
    </div>
  }
     
       
   
      
   
    <br />
  

 
    </div>

  );
}

export default App;
