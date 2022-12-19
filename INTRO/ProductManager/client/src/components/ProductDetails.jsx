import axios from 'axios';
import React from 'react'
import { useEffect, useState} from 'react'
import { Link, useParams } from 'react-router-dom'
const ProductDetails = () => {
    const {id} = useParams();
    const [product, setProduct] = useState({});
    useEffect(() => {
        console.log(id);
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => setProduct(res.data.product))
            .catch(err => console.log(err))
    }, []);
    return (
        <div>
            <Link to={"/"}>Home</Link>
            <p>Title: {product.title}</p>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
        </div>
    )
}

export default ProductDetails