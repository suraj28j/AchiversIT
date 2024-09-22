const Cart = require("../models/cart");
const Product = require("../models/product");

exports.showForm = (req, res, next) => {
  // res.sendFile(path.join(__dirname,'..','views','add-product.html'))
  res.render('add-product', {
    path: "/add-product",
    pageTitle: 'Add-product',
  });
};

exports.postAddProduct = (req, res, next) => {
  const product = new Product(req.body.title)
  product.save();
  res.redirect('/');
}

exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render('shop', { pageTitle: 'Shop Page', prods: products })
  })
}

exports.errorController = (req, res, next) => {
  res.status(404).render("404", { pageTitle: 'Error Page 404' })
}

exports.getProduct = (req, res, next) => {
    const id = req.params.productId;

Product.findById(id,(product)=>{
  res.render("product-details", {
        product:product,
    })
  })
}

exports.postCart = (req, res, next) => {
  const prodId = req.body.productId
  Product.findById(prodId,(product)=>{
    Cart.addProduct(prodId)
  });
  res.redirect("/");
}