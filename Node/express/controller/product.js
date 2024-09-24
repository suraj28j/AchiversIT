const Cart = require("../models/cart");
const Product = require("../models/product");

exports.showForm = (req, res, next) => {
  // res.sendFile(path.join(__dirname,'..','views','add-product.html'))
  res.render('add-product', {
    path: "/add-product",
    pageTitle: 'Add-product',
  });
};

// exports.postAddProduct = (req, res, next) => {
//   const product = new Product(req.body.title)
//   product.save();
//   res.redirect('/');
// }

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const product = new Product({ title: title });
  product
    .save()
    .then((result) => {
      console.log('Product saved to DB successfully')
      res.redirect('/');
    })
    .catch((error) => console.log(error))
}

// exports.getProducts = (req, res, next) => {
//   Product.fetchAll((products) => {
//     res.render('shop', { pageTitle: 'Shop Page', prods: products })
//   })
// }

exports.getProducts = (req, res, next) => {
  Product
    .find()
    .then((products) => {
      res.render('shop', { pageTitle: 'Shop Page', prods: products })
    })
}

exports.errorController = (req, res, next) => {
  res.status(404).render("404", { pageTitle: 'Error Page 404' })
}

exports.getProduct = (req, res, next) => {
  const id = req.params.productId;

  Product.findById(id, (product) => {
    res.render("product-details", {
      product: product,
    })
  })
}

exports.postCart = (req, res, next) => {
  const prodId = req.body.productId;
  const prodPrice = req.body.productPrice;
  const prodTitle = req.body.productTitle;
  Product.findById(prodId, (product) => {
    Cart.addProduct(prodId, prodTitle, Number(prodPrice))
  });
  // res.redirect("/");
  res.redirect("/cartdata");
}

// --------------------------------------------- //
exports.cartData = (req, res, next) => {
  Cart.getProduct((products) => {
    console.log('Products :- ', products);
    res.render('cart.ejs', {
      products: products
    });
  })
}
// --------------------------------------------- //