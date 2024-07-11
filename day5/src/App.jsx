import logo from './logo.svg';
import './App.css';
import { useState } from 'react';



function App() {


  let [state,setstate]=useState(0)



function counter() {
  
setstate(state + 1)

if (state<=1) {
    
  var button=document.getElementById('counter1');
 
     button.disabled = false;
     
   }


console.log(state);


}

function counterm() {


  if (state<=0) {
    
 var button=document.getElementById('counter1');

    button.disabled = true;
    
  }

  else{
    setstate(state - 1)
    console.log(state);
    
    
  }
  

  }


  return (
    <div className="App">
    
<div className="header">
  <h1>Click Counter</h1>
</div>

<div className="counter">
  <p><span id="displayCount">{state}</span></p>
  <button className="btn btn-primary "  onClick={counter} id="counter">+</button>
  <button className="btn btn-primary"  onClick={counterm} id="counter1" >-</button>
</div>


    </div>
  );
}

export default App;
