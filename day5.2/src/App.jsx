import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {


  let [state,setstate]=useState(0);

  let [states,setstates]=useState(0);


function vote() {
  
  setstate(state +1)

}

function votes() {
  
  setstates(states +1)

}

function result() {
  
  if (state>states) {
    document.getElementById('f').innerHTML="Nodejs Winner"
  }
  if (states>state) {
    document.getElementById('f').innerHTML="Reactjs Winner"
  } 

}


  return (
    <div className="App">

<div className='asa'>


     
     <div className='main'>

<div className='img'>
  <img src="https://www.loginradius.com/blog/static/6ee159acf6c294342ec04f86aede5d14/701ee/coverImage.jpg" alt="" />
</div>
<br />
<div className='heading'>
  <h1>{state}</h1></div><br />
<button onClick={vote} className='btn btn-danger form-control'>vote</button>
     </div>

     <div className='main'>
     <div className='img'>
      <img src="https://shethink.in/wp-content/uploads/2021/07/react.js-img.png" alt="" /></div><br />
     <div className='heading'><h1>{states}</h1></div><br />
     <button onClick={votes}  className='btn btn-danger form-control'>vote</button>
     </div>


     </div>
     

<h1 id='f'></h1>

<button onClick={result} id='f1' className='btn btn-danger'>Result</button>

    </div>

    
  );
}

export default App;
