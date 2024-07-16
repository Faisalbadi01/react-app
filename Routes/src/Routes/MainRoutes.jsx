import { Route, Routes } from "react-router-dom"
import Home from "../Pages/Home";
import About from "../Pages/About"
import Blog from "../Pages/Blog";
import Contact from "../Pages/Contact";
import Product from "../Pages/Product";
import Error from "../Pages/Error";
import Privateroute from "../Components/Privateroute";
import Login from "../Pages/Login";

function MainRoutes() {
  return (
    <div>

      <Routes>

        <Route path="/" element={<Home />} ></Route>
        <Route path="/abt" element={<About />}></Route>
        <Route path="/pro/:id" element={<Blog />}></Route>
        <Route path="/con" element={<Contact />}></Route>
        <Route path="/login" element={<Login />}></Route>

        <Route path="/pro" element={
          <Privateroute>
            <Product />
          </Privateroute>
        }></Route>


        <Route path="*" element={<Error />}></Route>
      </Routes>

    </div>
  )
}

export default MainRoutes