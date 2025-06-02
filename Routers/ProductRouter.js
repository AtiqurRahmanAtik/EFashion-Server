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
router.get('/product/:id', async(req,res)=>{
    // console.log(req.params.id);
    const id = req.params.id;
    console.log('Single Product id : ', id);
    console.log('Single Product id : ', id);
    
    try{

        const  singleProduct = await ProductModel.findById(id).exec();

        if(!singleProduct){
            return res.status(404).json({Message : 'Product not found '});
        }
    
        
       
        res.send(singleProduct);
    }
    catch(err){
        console.error('Cannot get single Product : ', err);
    }
})


router.delete('/product/:id', async(req,res)=>{
    const id = req.params.id;

    try{
        const product = await ProductModel.findByIdAndDelete(id).exec();
        if (!product) return res.status(404).json({ message: 'Not found' });
        res.send(product);

    }
    catch(err){
         console.error('Cannot Delete single Product : ', err);
    }
})

module.exports = router;