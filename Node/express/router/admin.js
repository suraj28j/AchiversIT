const express = require('express');
const router = express.Router();
const path = require('path');
const { showForm, postAddProduct } = require('../controller/product');
// const productConltrollerFunction = require('../controller/product')

// http://localhost:3000/admin/add-product
router.get("/add-product", showForm);
// router.get('/add-product',productConltrollerFunction.showForm);


// http://localhost:3000/admin/product
router.post("/product", postAddProduct)


module.exports = router;

// exports.router = router;

