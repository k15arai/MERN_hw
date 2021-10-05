import React, { useState } from 'react'
import { navigate } from '@reach/router'
import axios from 'axios';

const ProductForm = () => {
    // keep track of what is being typed via useState hooks
    const [ title, setTitle ] = useState("");
    const [ price, setPrice ] = useState("");
    const [ description, setDescription ] = useState("");

    const onSubmitHandler = (e) => {
        // prevent default behavior of the submit
        // e.preventDefault();
        // make a post request to create a new product
        axios.post('http://localhost:8000/api/products', {
            title: title,
            price: price,
            description: description,
        })
            .then((res) => {
                setTitle("");
                setPrice("");
                setDescription("");
                navigate("/");
            })
            .catch((err) => console.log(err));
    }
    
    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Title:</label><br/>
                <input type="text" onChange = {(e) => setTitle(e.target.value)} />
            </p>
            <p>
                <label>Price:</label><br/>
                <input type="text" onChange = {(e) => setPrice(e.target.value)} />
            </p>
            <p>
                <label>Description:</label><br/>
                <input type="text" onChange = {(e) => setDescription(e.target.value)} />
            </p>
            <input type="submit"></input>
        </form>
    )
}

export default ProductForm;