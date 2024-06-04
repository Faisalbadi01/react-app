import { useState } from "react";

function Todo() {

    let [arr,setarr]=useState([])

    let [work,setwork]=useState(" ");

    function add(el) {
    
        setwork(el.target.value);
        
    }

    function main() {
        
        let obj={
            task :work,
            comv : false
        }

        setarr([...arr,obj])

        // setwork("");
    }



    return (

      

        <>
        
     

        <div class="container">
        <div class="form">
            <input type="text" class="input" onChange={add} />
            <button type="button" class="add" onClick={main}>add task</button>
        </div>


        {
            arr.map((el)=>{

                return(
                <div className="tasks">

                {el.task}
                <button className="add1">edit</button>
                <button className="add2">delete</button>

                </div> )        
            })
        }
        
        <div className="delete-all">Delete all</div>
        </div>




        
        
        </>

    )

}

export default Todo;