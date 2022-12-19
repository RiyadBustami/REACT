import axios from 'axios';
import React from 'react'
import { useEffect, useState} from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
const ProductDetails = () => {
    const {id} = useParams();
    const [product, setProduct] = useState({});
    const navigate = useNavigate();
    useEffect(() => {
        console.log(id);
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => setProduct(res.data))
            .catch(err => console.log(err))
    }, []);

    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/products/' + productId)
            .then(res => {
                navigate('/');
            })
            .catch(err => console.error(err));
    }
    return (
        <div>
            <Link to={"/"}>Home</Link>
            <Link to={"/" + product._id + "/edit"}>
    Edit
</Link>
            <p>Title: {product.title}</p>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
            |
                    <button onClick={(e) => { deleteProduct(product._id) }}>
                        Delete
                    </button>
        </div>
    )
}

export default ProductDetails