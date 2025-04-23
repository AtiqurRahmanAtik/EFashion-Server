const express = require('express');
const ProductModel = require('../Models/Product.js');

const router = express.Router();

router.get('/product', async(req,res)=>{

    try{
        const Products = await ProductModel.find({});
        
        res.send(Products);
    }

    catch(err){
        console.error('cannot get product api : ',err);
    }
})


// single Product details Get api here
router.get('/Product/:id', async(req,res)=>{
    const id = req.params.id;
    
    try{

        const  singleProduct = await ProductModel.findById(id).exec();
        res.send(singleProduct);
    }
    catch(err){
        console.error('Cannot get single Product : ', err);
    }
})

module.exports = router;