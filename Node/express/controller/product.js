const path = require('path');
const products = [];


exports.getProducts = (req,res,next)=>{
    products.push({title:req.body.title})
    console.log(req.body);
    res.redirect("/");
}
exports.showForm = (req,res,next)=>{
    res.sendFile(path.join(__dirname,'..','views','add-product.html'))
}

exports.pageError = (req,res,next)=>{
    res.status(404).render('404',{pageTitle:'Error Page 404'})
}


exports.products = products