import { doc, updateDoc } from 'firebase/firestore';
import React, { useState } from 'react';
import { db } from "../firebase/Firebase 
 
 
 
 
 
 


function Edit({ data }) {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [brand, setBrand] = useState("");
    const [image, setImage] = useState("");
    const [submit, setSubmit] = useState(null);

    const handleEdit = (id) => {
        setSubmit(id);

        data.map((el) => {
            console.log(el);
            if (el.id === id) {
                setName(el.name);
                setPrice(el.price);
                setBrand(el.brand);
                setImage(el.image);
            }
        });
    };

    const edit = async (e) => {
        e.preventDefault();

        const userDoc = doc(db, "products", submit);
        const updatedData = {
            name: name,
            price: price,
            brand: brand,
            image: image
        };

        await updateDoc(userDoc, updatedData);
        alert("Product updated successfully");
    };

    return (
        <div>
            <div className='d'>
                <header className="topbar">
                    <h1>Dashboard</h1>
                    <div className="user-info">
                        <p>Welcome, User</p>
                        <a href="#">Logout</a>
                    </div>
                </header>

                <br /><br />
                <h1>Edit Product</h1>
                <br /><br />
                <form onSubmit={edit}>
                    <input
                        type="text"
                        value={name}
                        className='form-control'
                        placeholder='Name'
                        onChange={(e) => setName(e.target.value)}
                        name='name'
                    /><br />
                    <input
                        type="text"
                        value={price}
                        className='form-control'
                        placeholder='Price'
                        onChange={(e) => setPrice(e.target.value)}
                        name='price'
                    /><br />
                    <input
                        type="text"
                        value={brand}
                        className='form-control'
                        placeholder='Brand'
                        onChange={(e) => setBrand(e.target.value)}
                        name='brand'
                    /><br />
                    <input
                        type="text"
                        value={image}
                        className='form-control'
                        placeholder='Image URL'
                        onChange={(e) => setImage(e.target.value)}
                        name='image'
                    /><br />
                    <input
                        type="submit"
                        className='form-control btn btn-primary'
                        value="Update Product"
                    />
                </form>
            </div>
        </div>
    );
}

export default Edit;
