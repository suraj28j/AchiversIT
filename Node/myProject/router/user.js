const express = require('express');
const { showForm, userRegister, loginUser } = require('../controller/userController');
const router = express.Router();

router.get("/",showForm)
router.post('/reg',userRegister)
router.post("/login",loginUser)

module.exports = router