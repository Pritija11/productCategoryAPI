const Category = require('../models/Category');

const createCategoryHelper = async (data) => {
    const category = new Category(data);
    return await category.save();
}

const getCategoryHelper = async() =>{
    return await Category.find();
}

const getSingleCategoryHelper = async(id) => {
    return await Category.findById(id);
}

const updateCategoryHelper = async (id, data) => {
    return await Category.findByIdAndUpdate(id, data, { new: true, runValidators: true });
};

const deleteCategoryHelper = async(id) => {
    return await Category.findByIdAndDelete(id);
}

module.exports = {
    createCategoryHelper,
    getCategoryHelper,
    getSingleCategoryHelper,
    updateCategoryHelper,
    deleteCategoryHelper
};