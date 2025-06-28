const express = require('express');
const router = express.Router();
const { createProduct, getProduct, getSingleProduct, updateProduct, deleteProduct } = require('../controllers/productControllers');

router.post('/', createProduct);

router.get('/', getProduct);

router.get('/:id', getSingleProduct);

router.put('/:id', updateProduct);

router.delete('/:id', deleteProduct);

module.exports = router;