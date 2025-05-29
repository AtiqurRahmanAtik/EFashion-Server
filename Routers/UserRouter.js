const express = require('express');
const UserModel = require('../Models/Users.js');

const router = express.Router();


// Get Post api from register page to database
router.post('/users', async (req,res)=>{
    const {name, email, password} = req.body;
  
//  console.log(req.body);

    try{
        const users = new UserModel({name,email,password});
        console.log(users);
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


router.delete('/users/:id', async(req,res)=>{
    const id = req.params.id;
    
    try{
        const user = await UserModel.findByIdAndDelete(id);
        // console.log(user);
        if(!user){
            return res.status(404).json({message : 'product not found'})
        }
       

        res.send(user);
    }
    catch(err){
        console.log(err)
    }
})


router.put('/users/:id', async(req,res)=>{
        const {id} = req.params;
        // console.log(id);
      
        const {name,email,password} = req.body;
        

    try{
        
        const userUpdate = await UserModel.findByIdAndUpdate(id,{name,email,password}, {new : true});

        // console.log(userUpdate);

        if(!userUpdate){
            res.status(404).json({massage : 'user not Update : '})
        }

        res.send(userUpdate)
    }
    catch(err){
        console.error('not update data : ',err)
    }
})

module.exports = router;