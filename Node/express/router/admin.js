const express = require('express');
const router = express.Router()

// http://localhost:3000/admin/add-product
router.get("/add-product",(req,res,next)=>{
    res.send(`
        <form action = '/admin/product' method = 'POST'>
            <input type = 'text' name = 'title'>
            <button>Submit</button>
        </form>
        `)
})

// http://localhost:3000/admin/product
router.post("/product",(req,res,next)=>{
    console.log(req.body);
    res.redirect("/");
})


module.exports = router;