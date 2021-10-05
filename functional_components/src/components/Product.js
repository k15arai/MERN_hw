import React, { useState } from 'react';
// useState allows us to hold data - just a method - ability to update data - holding and updating those values 
// as it goes

const Product = (props) => {
    const [ inStock, setInStock  ] = useState(props.initialStock); // what do we want to save? getter, setter
    return (
        // props can't change once passed down. just for display
        <div>
            <h2>{ props.title }</h2>
            <p>Description: { props.desc }</p>
            <p>Cost: ${ props.cost }</p>
            {/* using getter to show what is in stock */}
            <p>In Stock: { inStock }</p> 
            {/* allows to update the inStock state */}
            <button onClick={ (event) => setInStock(inStock - 1)}>Buy {props.title}</button>
        </div>
    )
}

export default Product;