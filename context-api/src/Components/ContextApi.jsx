import React, { createContext, useReducer } from 'react'





export const mycontext = createContext()

const initial = 0;


const white = (state, action) => {

  switch (action.type) {
    case "INC":

      return state + 1;

    case "TINC":

      return state + 10;

    case "FINC":

      return state + 5;




    case "TTINC":

      return state + 20;


    default:
      return state;
  }


}

export function ContextApi({ children }) {

  const [state, dispatch] = useReducer(white, initial)


  return (

    <mycontext.Provider value={{ state, dispatch }}>
      {children}

    </mycontext.Provider>

  )
}

export default ContextApi