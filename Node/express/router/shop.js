const express = require("express");
const router = express.Router();
const path = require('path');
const adminData = require('./admin');
const { getProducts, getProduct, postCart, cartData } = require("../controller/product");

router.get('/', getProducts)

router.get('/products/:productId', getProduct)

router.post("/cart", postCart)

router.get("/cartdata",cartData)

module.exports = router