import { useEffect, useState } from "react"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { NavLink, Link } from "react-router-dom";


function Product() {

  let [state, setstate] = useState([])

  useEffect(() => {


    fetch(`https://fakestoreapi.com/products`)
      .then(res => res.json())
      .then(data => setstate(data));


  }, [])




  return (
    <>
      <center>
        <h1 style={{ fontSize: "60px" }}>Our Product</h1></center>




      <div className="fake">


        <>
          {
            state.map((val) => {

              return (




                <div className="main">

                  <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" id="d" src={val.image} />
                    <Card.Body>
                      <Card.Title>{val.title}</Card.Title>
                      <Card.Text>
                        {val.price}
                      </Card.Text>
                      <Link to={`/pro/${val.id}`} key={val.id} >
                        <Button variant="danger">Detail</Button></Link>
                    </Card.Body>
                  </Card>
                </div>



              )
            })
          }


        </>
      </div>
    </>
  )
}

export default Product