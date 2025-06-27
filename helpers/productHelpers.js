const { default: mongoose } = require('mongoose');
const Product = require('../models/product');

const createProductHelper = async(data) =>{
    const product = new Product(data);
    return await product.save();
}

const getProductHelper = async(query) =>{
    const { name, category} = query;
    const filter = {};
    if(name) filter.name = { $regex: name, $options: 'i' };
    if(category) filter.category = { $regex: category, $options: 'i' };
    return await product.find(filter);
}

module.exports = {createProductHelper, getProductHelper};