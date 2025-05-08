const express = require('express');
const UserModel = require('../Models/Users.js');

const router = express.Router();


// Get Post api from register page to database
router.post('/users', async (req,res)=>{
    const {name, email, password} = req.body;
  
 

    try{
        const users = new UserModel({name,email,password});
     
        await users.save();
        res.status(201).send(users);
    }
    catch(err){
        console.error('Error not connect to the User Api : ',err);
    }
})



// Get User api from database
router.get('/users', async(req,res)=>{

    try{
        const users = await UserModel.find();
        res.send(users);

    }
    catch(err){
        console.error('connot get register users api form database :', err);
    }
})

module.exports = router;