const Product = require("../models/product");

exports.showForm = (req, res, next) => {
  // res.sendFile(path.join(__dirname, "..", "views", "add-product.html"));
  res.render("add-product", {
    path: "/add-product",
    pageTitle: "Add-product",
  });
};

exports.postAddProducts = (req, res, next) => {
  const product = new Product(req.body.title);
  product.save();
  res.redirect("/");
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop", { pageTitle: "Shop page", prods: products });
  });
};

exports.errorController = (req, res, next) => {
  res.status(404).render("404", { pageTitle: "Error page 404" });
};