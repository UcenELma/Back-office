const express = require('express');
const { default: mongoose } = require('mongoose');

const Schema = require('mongoose').Schema;


const createProduct = new Schema({
    productName: String,
    description: String,
    price: Number,
    quantity: Number,
    brand: String,
    Image: Image,
    createdAt: {
        type: Date,
        default: () => Date.now()
    }
});

let Product = mongoose.model('User', createProduct);

module.exports = Product;