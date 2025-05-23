

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        require : true
    },
    email : {
        type : String,
        require : true,
        unique: true,
        trim: true
    },
    password : {
        type : String,
        require : true
    }
});



const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;