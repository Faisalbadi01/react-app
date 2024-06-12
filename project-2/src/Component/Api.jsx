import React, { useState } from 'react'

function Api({sub}) {

    return(
     <div className='mid'>
            {
                sub.map((val)=>{
                    return(
                        <div>

                            <h1 className='text-light'>Random Users</h1>
                     <div class="card">
  <img src={val.picture.medium} class="card-img-top" alt="..."/>
  <div class="card-body">

    <p><span>Name:-</span>       {val.name.last}</p>
    <p><span>Dob:-</span>{val.dob.date}</p>
    <p><span>Phone:-</span> {val.phone}</p>
    <p class="card-text"><span>City:-</span>{val.location.city}</p>
  </div>

</div>
                        </div>
                    )
                })
            }
        </div>
    )
  
}

export default Api;