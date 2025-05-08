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
        const users = await UserModel.find({});
        res.send(users);

    }
    catch(err){
        console.error('connot get register users api form database :', err);
    }
})


router.get('/users/:id', async(req,res)=>{
    const id = req.params.id;

    try{
            const user = await UserModel.findById(id);
            if (!user) {
                return res.status(404).json({ error: 'User not found' });
              }

            res.send(user);
    }
    catch(err){
        console.log('Not find single data user api',err)
    }
})

module.exports = router;