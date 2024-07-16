import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import "../Pages/Login.modules.css"

function Blog() {


  const { id } = useParams()

  const [state, setstate] = useState({})


  useEffect(() => {

    fetch(`https://fakestoreapi.com/products/${id}`)

      .then((res) => res.json())
      .then((res) => {
        setstate(res)
      })
      .catch((err) => {
        console.log(err)
      })


  }, [])


  return (

    <div id="mai">

      <div id="sub1">
        <br /><br /><br /><br /><br /><br /><br /><br /><br />
        <img src={state.image} alt="" height={500} width={500} /> <br /><br /><br />
      </div>

      <div id="sub2">
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <h1><span className="dd">Price:-</span>{state.title}</h1><br /><br /><br />

        <h1><span className="dd">Price:-</span> {state.price}</h1>
        <br /><br />
        <p>  <h1> <span className="dd">Description:-</span></h1>{state.description}</p>

        <br /><br /><br />

        <button className="btn btn-danger">Order</button>
      </div>

      {/* <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" id="d" src={state.image} />
        <Card.Body>
          <Card.Title>{state.title}</Card.Title>
          <Card.Text>
            {val.price}
          </Card.Text>

          <Button variant="danger">Detail</Button>
        </Card.Body>
      </Card> */}
    </div>

  )
}

export default Blog