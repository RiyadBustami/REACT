const { request, response } = require('express');
const { Product } = require('../models/product.model');
module.exports.createProduct = (request, response) => {
    const { title, price, description } = request.body;
    Product.create({
        title,
        price,
        description,
    })
        .then(product => response.json(product))
        .catch(err => response.json(err));
}

module.exports.getAllProducts = (request, response) => {
    Product.find({})
        .then(products => response.json(products))
        .catch(err => response.json(err))
}

module.exports.getProduct = (request, response) => {
    Product.findById(request.params.id)
        .then(foundProduct=> response.json({product: foundProduct}))
        .catch(err => response.json(err))
}