import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Cart from './Components/Cart';
import { useEffect, useState } from 'react';


function App() {




  const [arr,setrArr] = useState([])
    useEffect(()=>{
      
      axios('https://jsonplaceholder.typicode.com/todos')
      .then((res)=>{
        setrArr(res.data)
      })
      
     

      
    },[])
   
   console.log(arr)




  return (
    <div className="App">
     
   <Cart fai={arr}/>



    </div>
  );
}

export default App;
