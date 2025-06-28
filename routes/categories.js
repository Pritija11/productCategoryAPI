const express = require('express');
const router = express.Router();
const {createCategory, getCategories, getsingleCategory,  updateCategory, deleteCategory } = require('../controllers/categoryController');

router.post('/', createCategory);
router.get('/', getCategories);
router.get('/:id', getsingleCategory);
router.put('/:id', updateCategory);
router.delete('/:id', deleteCategory);

module.exports = router;
   