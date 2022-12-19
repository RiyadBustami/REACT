import React from 'react'
import { Link } from 'react-router-dom'

const ProductList = (props) => {
    return (
        <div>
            {props.products.map((product, i) => <Link to={"/"+product._id}><p key={i}>{product.title}</p></Link>)}
        </div>
    )
}

export default ProductList