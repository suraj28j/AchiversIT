// const fs = require('fs');
// const path = require('path');

// const dataPath = path.join(
//     path.dirname(process.mainModule.filename),
//     "data",
//     "cart.json"
// );

// module.exports = class Cart {
//     static addProduct(id, title, price) {
//         fs.readFile(dataPath, (err, data) => {
//             let cart = { products: [], cartTotalPrice: 0 };
//             if (!err) {
//                 cart = JSON.parse(data)
//             }

//             const existProductIndex = cart.products.findIndex(
//                 (curElm) => curElm.id === id
//             );
//             const existingProduct = cart.products[existProductIndex]

//             let updatedProduct;

//             if (existingProduct) {
//                 updatedProduct = { ...existingProduct }
//                 updatedProduct.qty = updatedProduct.qty + 1;
//                 cart.products = [...cart.products]
//                 cart.products[existProductIndex] = updatedProduct;
//             } else {
//                 updatedProduct = { id: id, title: title, price: price, qty: 1 }
//                 cart.products = [...cart.products, updatedProduct]
//             }
//             // ----------------------------------------------------------------------- //
//             let perItemPrice = cart.products.map((item) => {
//                 return item.price * item.qty;
//             })
//             cart.cartTotalPrice = perItemPrice.reduce((acc, curr) => { return acc + curr }, 0)
//             // ----------------------------------------------------------------------- //

//             fs.writeFile(dataPath, JSON.stringify(cart), (err) => {
//                 console.log(err);
//             })
//         })
//     }


//     // ----------------------------------------------------------------------- //
//     static getProduct(cb) {
//         let cart;
//         fs.readFile(dataPath, (err, data) => {
//             if (!err) {
//                 cart = JSON.parse(data)
//                 cb(cart)
//                 // console.log(cart);
//             }
//         })
//     }
//     // ----------------------------------------------------------------------- //
// }


const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    title:{
         type:String,
         require:true
    },
    price:{
        type:Number,
        // require:true
    }
})

module.exports = mongoose.model("cart",productSchema)