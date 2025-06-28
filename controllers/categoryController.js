const { updateCategoryHelper, deleteCategoryHelper, createCategoryHelper, getCategoryHelper, getSingleCategoryHelper} = require('../helpers/categoryHelper');

const createCategory= async (req, res) => {
    try{
        const category = await createCategoryHelper(req.body);
        res.status(201).json({ message: "Category created successfully!", category });
    } catch (error) {
        res.status(500).json({ message: "Error creating category", error: error.message });
    }
};

const getCategories = async (req, res) => {
    try {
        const categories = await getCategoryHelper();
        res.status(200).json({ message: "Categories retrieved successfully!", categories });
    } catch (error) {
        res.status(500).json({ message: "Error retrieving categories", error: error.message });
    }
};

const getsingleCategory = async (req, res) => {
    try{
        const category = await getSingleCategoryHelper(req.params.id);
        if (!category) {
            return res.status(404).json({ message: "Category not found" });
        }
        res.status(200).json({ message: "Category retrieved successfully!", category });
    } catch (error) {
        res.status(500).json({ message: "Error retrieving category", error: error.message });
    }
};

const updateCategory = async (req, res) => {
    try{
        const updated = await updateCategoryHelper(req.params.id, req.body);
        if (!updated) {
            return res.status(404).json({ message: "Category not found" });
        }
        res.status(200).json({ message: "Category updated successfully!", updated });
    } catch (error) {
        res.status(500).json({ message: "Error updating category", error: error.message });
    }
};

const deleteCategory = async (req, res) => {
    try{
        const deleted = await deleteCategoryHelper(req.params.id);
        if (!deleted) {
            return res.status(404).json({ message: "Category not found" });
        }
        res.status(200).json({ message: "Category deleted successfully!" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting category", error: error.message });
    }
};

module.exports = {
    createCategory,
    getCategories,
    getsingleCategory,
    updateCategory,
    deleteCategory
};