import React, { useEffect, useState } from 'react'
import { Link } from '@reach/router'
import { navigate } from '@reach/router'
import axios from 'axios';

const ProductDetail = (props) => {
    const [ product, setProduct ] = useState({});

    const deleteProduct = (productId) => {
        axios.delete(`http://localhost:8000/api/products/${productId}`)
            .then((res) => {
                navigate(`/`);
            })
    }

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${props.id}`)
            .then((res) => setProduct({
                ...res.data
            }))
    // eslint-disable-next-line
    }, [])

    return (
        <div>
            <Link to="/">
                | Go Back to All Products |
            </Link>
            <p>Title: { product.title }</p>
            <p>Price: ${ product.price }</p>
            <p>Description: { product.description }</p>
            <button onClick={(e) => {deleteProduct(product._id)}}>
                        Delete
            </button>
        </div>
    )

    // const { deleteProduct, productObj, idx } = props;

    // return (
    //     <div key={idx}>
    //         <p>Title: {productObj.title}</p>
    //         <p>Price: {productObj.price}</p>
    //         <p>escription: {productObj.description}</p>
    //         <button onClick={() => navigate(`/${productObj._id}/edit`)}>Update</button>
    //         <button onClick={() => deleteProduct(productObj._id)}>Delete</button>
    //     </div>
    // )
}

export default ProductDetail;

    //                 <Link to={ `/products/${product._id}`}>
    //                     | {product.title} |
    //                 </Link>
    //                 <Link to={ `/products/${product._id}/edit`}>
    //                     | Edit |
    //                 </Link>