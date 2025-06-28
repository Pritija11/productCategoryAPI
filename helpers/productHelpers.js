const { default: mongoose } = require('mongoose');
const Product = require('../models/Product');

const createProductHelper = async(data) =>{
    const product = new Product(data);
    return await product.save();
}

const getProductHelper = async(query) =>{
    const { name, category} = query;
    const filter = {};
    if(name) filter.name = { $regex: name, $options: 'i' };
    if(category) filter.category = { $regex: category, $options: 'i' };
    return await Product.find(filter);
}

const getSingleProductHelper = async(id) =>{
    return await Product.findById(id);
}

const updateProductHelper = async (id, data) =>{
    return await Product.findByIdAndUpdate(id, data, { new: true, runValidators: true });
};

const deleteProductHelper = async(id) =>{
    return await Product.findByIdAndDelete(id);
}

module.exports = {createProductHelper, getProductHelper, getSingleProductHelper, updateProductHelper, deleteProductHelper};