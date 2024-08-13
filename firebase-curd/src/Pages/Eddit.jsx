










import React, { useEffect, useState } from 'react'
import { collection, doc, getDoc, updateDoc } from 'firebase/firestore'
import { useParams, useNavigate } from 'react-router-dom'
import { db } from "../firebase/Firebase"
import Swal from 'sweetalert2'


function EditProduct() {
    const { id } = useParams();
    console.log(id)
    const [product, setProduct] = useState({ name: '', price: '', brand: '', image: '' });
    const navigate = useNavigate();
    const usercollection = collection(db, "products")
    useEffect(() => {
        const fetchProduct = async () => {
            const productDoc = doc(db, "products", id);
            const productSnapshot = await getDoc(productDoc);
            if (productSnapshot.exists()) {
                setProduct(productSnapshot.data());
            } else {
                console.log("No such document!");
            }
        }

        fetchProduct();
    }, [id]);
    console.log(product)
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    }

    const handleUpdate = async () => {
        const productDoc = doc(db, "products", id);
        await updateDoc(productDoc, product);


        Swal.fire({
            icon: "success",
            title: "Success",
            text: "Add Successfully Done....",

        });



        navigate('/tbl'); // Redirect to the home page after updating
    }



    return (
        <div className='d'>

            <header className="topbar">
                <h1>Dashboard</h1>
                <div className="user-info">
                    <p>Welcome, User</p>
                    <a href="#">Logout</a>
                </div>
            </header>

            <br /><br />

            <h2>Edit Product</h2>
            <br />
            <form onSubmit={(e) => { e.preventDefault(); handleUpdate(); }}>
                <label>Name:</label>
                <input type="text" name="name" className='form-control' value={product.name} onChange={handleInputChange} /><br />

                <label>Price:</label>
                <input type="text" name="price" className='form-control' value={product.price} onChange={handleInputChange} /><br />

                <label>Brand:</label>
                <input type="text" name="brand" className='form-control' value={product.brand} onChange={handleInputChange} /><br />

                <label>Image URL:</label>
                <input type="text" name="image" className='form-control' value={product.image} onChange={handleInputChange} /><br />

                <button type="submit" className='form-control btn btn-success' >Update Product</button>
            </form>
        </div>
    )
}

export default EditProduct;
