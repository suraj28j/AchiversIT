const path = require('path')

const User = require('../models/userModel.js');

exports.showForm = (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'home.html'));
}

exports.userRegister = (req, res, next) => {
    const { username, email, password, phone } = req.body
    const user = new User(username, email, password, phone);
    try {
        user.save();
        console.log('User saved to DB successfully')
        res.redirect("/")
    } catch (error) {
        console.log(error);
    }
}

exports.loginUser = (req,res,next) => {
    const{email,password} = req.body;
    User.findById(email,(data)=>{
        res.render('userDetails',{user:data})
    })
}