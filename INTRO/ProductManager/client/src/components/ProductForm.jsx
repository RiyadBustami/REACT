import React, { useState } from 'react'
const ProductForm = (props) => {
    const { initialProduct, onSubmitProp } = props;
    const [title, setTitle] = useState(initialProduct.title);
    const [price, setPrice] = useState(initialProduct.price);
    const [description, setDescription] = useState(initialProduct.description);
    const handleSubmit = (e) => {
        console.log("Handling submit")
        e.preventDefault();
        onSubmitProp({title, price, description});
        setTitle("");
        setDescription("");
        setPrice("");
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title: </label>
                <input type='text' onChange={e => setTitle(e.target.value)} value={title} />
            </div>
            <div>
                <label>Price: </label>
                <input type='text' onChange={e => setPrice(e.target.value)} value={price} />
            </div>
            <div>
                <label>Description: </label>
                <input type='text' onChange={e => setDescription(e.target.value)} value={description} />
            </div>
            <button>Create Product </button>
        </form>
    )
}

export default ProductForm