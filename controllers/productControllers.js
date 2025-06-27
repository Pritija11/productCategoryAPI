const{createProductHelper, getProductHelper}= require('../helpers/productHelpers');

const createProduct = async(req, res) =>{
    try{
        const newProduct = await createProductHelper(req.body);
        res.status(201).json(newProduct);
    }catch(err){
        res.staus(500).json({error: err.message});
    }
};

const getProduct = async (req, res) =>{
    try{
        const products = await getProductHelper(req.query);
        res.status(200).json(products);
    }catch(err){
        res.status(500).json({error: err.message});
    }
};

module.exports = {createProduct, getProduct};