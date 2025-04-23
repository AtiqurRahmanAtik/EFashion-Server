
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    ProductName : {
        type : String,
        require : true
    },
    
    BrandName : {
        type : String,
        require : true
    },
    
   
    ProductImage : {
        type : String,
        require : true
    },
    
    Description : {
        type : String,
        require : true
    },
    Price : {
        type : Number,
        require : true
    },
    
    Category : {
        type : String,
        require : true
    },
   
    Ratings : {
        type : Number,
        require : true
    },
    
    ProductCreationDateTime : {
        type : String,
        require : true
    }

});


const ProductModel = mongoose.model('Product',ProductSchema);

module.exports = ProductModel;
