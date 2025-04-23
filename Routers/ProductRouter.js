const express = require('express');
const ProductModel = require('../Models/Product.js');

const router = express.Router();

router.get('/products', async(req,res)=>{

    try{
        const Products = await ProductModel.find({});
        
        res.send(Products);
    }

    catch(err){
        console.error('cannot get product api : ',err);
    }
})

module.exports = router;