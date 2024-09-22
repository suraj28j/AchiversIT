const fs = require('fs');
const path = require('path');

const dataPath = path.join(
    path.dirname(process.mainModule.filename),
    "data",
    "cart.json"
);

module.exports = class Cart {
    static addProduct(id,price) {
        fs.readFile(dataPath, (err, data) => {
            let cart = { products: [], cartTotalPrice: 0 };
            if (!err) {
                cart = JSON.parse(data)
            }

            const existProductIndex = cart.products.findIndex(
                (curElm) => curElm.id === id
            );
            const existingProduct = cart.products[existProductIndex]

            let updatedProduct;

            if (existingProduct) {
                updatedProduct = { ...existingProduct }
                updatedProduct.qty = updatedProduct.qty + 1;
                cart.products = [...cart.products]
                cart.products[existProductIndex] = updatedProduct;
            } else {
                updatedProduct = { id:id,price:price, qty:1 }
                cart.products = [...cart.products, updatedProduct]
            }
            fs.writeFile(dataPath,JSON.stringify(cart),(err)=>{
                console.log(err);
            })
        })
    }
}