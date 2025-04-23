const { default: mongoose } = require("mongoose");
require('dotenv').config();


const url = process.env.MONGO_URL;


const connectDB = async()=>{
    try{
       await mongoose.connect(url,{
        
       }),
       console.log('Mongoose Database Connect Here');
    }
    catch(err){
        console.error('Error Connecting to the DataBase ', err);
        process.exit(1);
    }
}



module.exports = connectDB;