import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { mycontext } from './Components/ContextApi'

function App() {

  const data = useContext(mycontext)

  console.log(data);
  return (
    <>
      <h1>{data.state}</h1>
      <button onClick={() => data.dispatch({ type: "INC" })}>Click</button>
      <button onClick={() => data.dispatch({ type: "FINC" })}>5+</button>
      <button onClick={() => data.dispatch({ type: "TINC" })}>10+</button>
      <button onClick={() => data.dispatch({ type: "TTINC" })}>20+</button>
    </>
  )
}

export default App
