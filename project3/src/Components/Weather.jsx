import React, { useState } from 'react'
import axios from "axios";


import { MagnifyingGlass } from 'react-loader-spinner'


function Weather() {
   const [city,setcity]=useState("");

   const [res,setres] =useState()

   const [temp,settemp] =useState("")
   const [loc,setloc]=useState("")
   const [cur,setcur]=useState("")
   const [speed,setspeed]=useState("")

   const [load,setload] = useState(true)



   const result =() =>{

    setload(true);
    const apiKey = "1a48ac5b89643471d2cf16022f0733f3";
    var api="https://api.openweathermap.org/data/2.5/weather?&=&units=metric&q=";


    axios(api + city + `&appid=${apiKey}`)
    .then((val)=>{
console.log(val.data);

settemp(val.data.main.temp + "°C")

setcur(val.data.name)

setloc(val.data.main.humidity + "%")

setspeed(val.data.wind.speed+' km/')

setload(false)
      
    })
.catch((err)=>{
    console.log("Data Fetching is Wrong",err);
          setload(false);
})

   }


  return (
    <div>


        
         <div className="card">
        <div className="search">

            <input type="text" placeholder="enter city name" spellcheck="false" onChange={(val)=>{setcity(val.target.value)}} id="sea"/>
            <button><img src="search.png" alt=""onClick={result}/></button>  
        </div>

<>
{

load ? <div>

<MagnifyingGlass
  visible={true}
  height="80"
  width="80"
  ariaLabel="magnifying-glass-loading"
  wrapperStyle={{}}
  wrapperClass="magnifying-glass-wrapper"
  glassColor="#c0efff"
  color="#e15b64"
  />
</div>
:        <div className="weather" id="w">
            <img src="" alt="" className="weather-icon" id="im"/>
            <h1 className="temp" id="temp">{temp}</h1>
            <h2 className="city" id="city">{city}</h2>

            <div className="details">
                <div className="col">
                    <img src="humidity.png"/>
                    <div>
                        <p className="humidity" id="hum">{loc}</p>
                        <p>humiditiy</p>
                    </div>
                </div>

                <div class="col">
                    <img src="wind.png"/>
                    <div>
                        <p class="wind" id="win">{speed}</p>
                        <p>wind Speed</p>
                    </div>
                </div>

            </div>


        </div>

}
        </>
    </div>
    
    </div>
  )
}

export default Weather