import React, { useEffect, useState } from 'react'
import { Link, navigate } from '@reach/router'
import axios from 'axios';

const UpdateProduct = (props) => {
    const { id } = props;
    const [ title, setTitle ] = useState();
    const [ price, setPrice ] = useState();
    const [ description, setDescription ] = useState();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then((res) => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
    // eslint-disable-next-line
    }, []);

    const updateProductHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/products/${id}`, {
            title: title,
            price: price,
            description: description,
        })
            .then((res) => navigate(`/${id}`));
    }

    return(
        <div>
            <h1>Update a Product</h1>
            <Link to="/">
                | Go Back to All Products |
            </Link>
            <form onSubmit={updateProductHandler}>
                <p>
                    <label>Title:</label><br/>    
                    <input 
                        type="text"
                        name="title"
                        value={title}
                        onChange={(e) => { setTitle(e.target.value) }}
                    />
                </p>
                <p>
                    <label>Price:</label><br/>
                    <input 
                        type="text"
                        name="price"
                        value={price}
                        onChange={(e) => { setPrice(e.target.value) }}
                    />
                </p>
                <p>
                    <label>Title:</label><br/>
                    <input 
                        type="text"
                        name="description"
                        value={description}
                        onChange={(e) => { setDescription(e.target.value) }}
                    />
                </p>
                <button type="submit">Update</button>
            </form>
        </div>
    )
}
export default UpdateProduct;