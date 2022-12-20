import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import ProductForm from '../components/ProductForm';

const Update = () => {
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [loaded, setLoaded] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
                setLoaded(true);
            })
    },[id])

    const updateProduct = product => {
        axios.put('http://localhost:8000/api/products/'+id, {
            title: product.title,
            price: product.price,
            description: product.description,
        })
            .then(res => {console.log(res); navigate("/"+id);})
            .catch(err=>console.log(err));
    }

    return (
        <div>
            <Link to={"/"}>Home</Link>
            <h1>Update a Product</h1>
            {loaded && <ProductForm initialProduct={{title, price, description}} onSubmitProp={updateProduct}/>}
        </div>
    )
}

export default Update