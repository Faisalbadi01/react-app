import { useEffect, useState } from "react"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { NavLink, Link } from "react-router-dom";
import "../Pages/Login.modules.css"


function Product() {

  let [state, setstate] = useState([])


  const [filter, setFilter] = useState({
    men: false,
    women: false,
    jewelry: false,
    electronics: false
  });

  const [sortOption, setSortOption] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {


    fetch(`https://fakestoreapi.com/products`)
      .then(res => res.json())
      .then(data => setstate(data));


  }, [])





  const handleFilterChange = (e) => {
    setFilter({
      ...filter,
      [e.target.name]: e.target.checked
    });
  };



  let filteredData = state

  if (filter.men || filter.women || filter.jewelry || filter.electronics) {
    filteredData = filteredData.filter((el) => {

      if (filter.men && el.category == "men's clothing") {
        return true;
      }
      if (filter.women && el.category == "women's clothing") {
        return true;
      }
      if (filter.jewelry && el.category == "jewelery") {
        return true;
      }
      if (filter.electronics && el.category == "electronics") {
        return true;
      }

    })

  }


  if (sortOption) {
    filteredData = filteredData.sort((a, b) => {
      if (sortOption == "asc") {
        return a.price - b.price;
      } else if (sortOption == "desc") {
        return b.price - a.price;
      } else if (sortOption == "atoz") {
        return a.title.localeCompare(b.title)
      }
    })
  }


  if (searchTerm) {
    filteredData = filteredData.filter((el) => {
      return el.title.toLowerCase().includes(searchTerm.toLowerCase())
    })


  }


  return (
    <>


      <br /><br /><br />

      <div className="fake">

        <div class="page-heading products-heading header-text">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <div class="text-content">
                  <h4>new arrivals</h4>
                  <h2>sixteen products</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br /><br />

        <div className="hed">
          <nav className="main">

            <input type="checkbox" className="tb" name="men" onChange={handleFilterChange} /> Men
            <input type="checkbox" className="tb" name="women" onChange={handleFilterChange} /> Women
            <input type="checkbox" className="tb" name="jewelry" onChange={handleFilterChange} /> Jewelry
            <input type="checkbox" className="tb" name="electronics" onChange={handleFilterChange} /> Electronics
          </nav>

          <div>
            <select name="" id="" className="form-control" onChange={(e) => setSortOption(e.target.value)}>
              <option value="">Sort</option>
              <option value="asc">Low to High</option>
              <option value="desc">High to Low</option>
              <option value="atoz">A to Z</option>
            </select>
          </div>

          <div>
            <input type="text" className="form-control fb" placeholder="Search" onChange={(e) => setSearchTerm(e.target.value)} />
          </div>
        </div>


        <br /><br /><br /><br /><br /><br />



        <>
          <div className="m">

            {
              filteredData.map((val) => {

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
          </div>


        </>
      </div>
    </>
  )
}

export default Product