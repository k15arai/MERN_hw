import React from 'react';
import { Link } from '@reach/router';
import { navigate } from '@reach/router';
import ProductDetail from '../views/ProductDetail';
import axios from 'axios';

const ProductList = (props) => {
    const { removeFromDom }  = props;
    const deleteProduct = (productId) => {
        axios.delete(`http://localhost:8000/api/products/${productId}`)
            .then((res) => {
                removeFromDom(productId);
                navigate(`/`);
            })
    }

    return (
        <div>
            {props.products.map((product, idx) => {
                return <p key={idx}>
                    <Link to={ `/${product._id}`}>
                        | {product.title} |
                    </Link>
                    <button onClick={() => navigate(`/${product._id}/edit`)}>Update</button>
                    <button onClick={(e) => {deleteProduct(product._id)}}>
                        Delete
                    </button>
                </p>
            })}
        </div>
    )
    // return (
    //     <div>
    //         {props.products.map((productObj, idx) =>(
    //             <ProductDetail
    //                 deleteProduct={deleteProduct}
    //                 productObj={productObj}
    //                 idx={idx}
    //             />
    //         ))}
    //     </div>
    // )
}
export default ProductList;


