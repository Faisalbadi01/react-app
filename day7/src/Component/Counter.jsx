import { Component } from "react";


class Counter extends Component{



    constructor (props) {


        super(props)


        this.state ={count : 0}
    }

    inc = () => {


        this.setState ({count : this.state.count +1})

        if (this.state.count<=0) {
                
            var  button=document.getElementById('f')

            button.disabled = false;
            
        }


    }

    dec = () =>{

      

        if (this.state.count<= 0) {
            
            var  button=document.getElementById('f')

            button.disabled = true;
            
        }
        else{
            this.setState({count :this.state.count -1})
        }

    }


render(){

return(


    <>
    <h1>Counter</h1>

    <div class="number">
	<button class="minus"  id="f" onClick={this.dec}>-</button>
	<h1>{this.state.count}</h1>
	<button class="plus"   onClick={this.inc}>+</button>
</div>
    
    </>

)

}



}


export default Counter


