import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


  return (
    <>


      <div class="container">
        <div class="signin-form">
          <h2>Sign In</h2>
          <form>
            <div class="input-group">
              <label for="username">Username</label>
              <input type="text" id="username" value={box.name} className={valid ? "a" : ""} onChange={handelchange} name="name" onBlur={handleblur} />
            </div>
            <div class="input-group">
              <label for="password">Password</label>
              <input type={sshow} id="password" value={box.password} onChange={handelchange} name="password" onBlur={handleblurps} /><i class="bi bi-eye-fill" id="ssss" onClick={show} ></i>
            </div>
            <button type="submit" onClick={handleLoginClick} >Sign In</button>
          </form>
        </div>
      </div>

    </>
  )
}

export default App
