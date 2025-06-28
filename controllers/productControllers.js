const {
  createProductHelper,
  getProductHelper,
  getSingleProductHelper,
  updateProductHelper,
  deleteProductHelper
} = require('../helpers/productHelpers');

const createProduct = async (req, res) => {
  try {
    const newProduct = await createProductHelper(req.body);
    res.status(201).json({ message: "Product created!", product: newProduct });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getProduct = async (req, res) => {
  try {
    const products = await getProductHelper(req.query);
    res.status(200).json({ message: "Products retrieved!", products });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getSingleProduct = async (req, res) => {
  try {
    const product = await getSingleProductHelper(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json({ message: "Product found!", product });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateProduct = async (req, res) => {
  try {
    const updated = await updateProductHelper(req.params.id, req.body);
    if (!updated) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json({ message: "Product updated!", product: updated });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteProduct = async (req, res) => {
    try{
        const deleted = await deleteProductHelper(req.params.id);
        if (!deleted) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json({ message: "Product deleted!" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = {
  createProduct,
  getProduct,
  getSingleProduct,
  updateProduct,
  deleteProduct
};
