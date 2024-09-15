const express = require('express');
const router = express.Router()

const {showForm,getProducts} = require('../controller/product')


// http://localhost:3000/admin/add-product
router.get("/add-product",showForm)

// http://localhost:3000/admin/product
router.post("/product",getProducts)


// module.exports = router;

exports.router = router
