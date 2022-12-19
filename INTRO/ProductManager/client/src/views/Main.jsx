import React, { useEffect, useState } from 'react';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
import axios from 'axios';
const Main = () => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => {
                setProducts(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    }, []);

    const removeFromDom = (id)=>{
        setProducts(products.filter((product)=>product._id != id));

    }
    return (
        <div>
            <ProductForm />
            <hr />
            {loaded && <ProductList removeFromDom={removeFromDom} products={products} />}
        </div>
    )
}
export default Main;
