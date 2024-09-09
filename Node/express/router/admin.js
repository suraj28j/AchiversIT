const express = require('express');
const router = express.Router()
const path = require('path');

// http://localhost:3000/admin/add-product
router.get("/add-product",(req,res,next)=>{
    res.sendFile(path.join(__dirname,'..','views','add-product.html'))
})

// http://localhost:3000/admin/product
router.post("/product",(req,res,next)=>{
    console.log(req.body);
    res.redirect("/");
})


module.exports = router;