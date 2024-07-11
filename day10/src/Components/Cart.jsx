import React from 'react'

function Cart({fai}) {
  return (
    <div>
        {
                fai.map((el)=>{
                    return (
                        <div>
                            <h1>{el.title} - {el.completed ? "Completed" : "Not Completed"}</h1>
                        </div>
                    )
                })
        }
    </div>
  )
}

export default Cart