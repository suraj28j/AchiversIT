const fs = require('fs');
const path = require('path');

const dataPath = path.join(
    path.dirname(process.mainModule.filename),
    "data",
    "products.json"
);

const getProductFromFile = (cb) => {
    fs.readFile(dataPath, (err, data) => {
        if (err) {
            return cb([])
        } else {
            cb(JSON.parse(data));
        }
    })
}

module.exports = class Product {
    constructor(title) {
        this.title = title
    }
    save() {
        this.id = Math.random().toString()
        this.price = 99;
        getProductFromFile((products) => {
            products.push(this)
            fs.writeFile(dataPath, JSON.stringify(products), (err) => {
                console.log(err);
            });
        });
    }
    static fetchAll(cb) {
        getProductFromFile(cb)
    }
    static findById(id, cb) {
        getProductFromFile((products) => {
            const singleProduct = products.find(
                (product) => String(product.id).trim() === String(id).trim()
            );
            cb(singleProduct);
        })
    }
}