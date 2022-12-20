import React from 'react'
import { Link } from 'react-router-dom'
import DeleteButton from './DeleteButton';

const ProductList = (props) => {
    const { removeFromDom } = props;
    return (
        <div>
            {props.products.map((product, i) => {
                return <p key={i}>
                    <Link to={"/" + product._id}>
                        {product.title}
                    </Link>
                    |
                    <DeleteButton id={product._id} successCallback={e=>removeFromDom(product._id)} />
                </p>
            })}
        </div>
    )
}

export default ProductList