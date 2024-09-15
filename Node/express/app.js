const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path')
const adminRouter = require('./router/admin')
const shopRouter = require('./router/shop')
const {pageError} = require('./controller/product')

app.set('view engine','ejs')
app.set('views','views');

app.use(bodyParser.urlencoded({extended:true}))

// static file access
app.use(express.static(path.join(__dirname,'public')))

app.use("/admin",adminRouter.router);
app.use(shopRouter);

// --------------- //
app.use(pageError)
// --------------- //

app.listen(3000);








/*
http://localhost:3000/admin/add-product
http://localhost:3000/admin/edit-product
http://localhost:3000/admin/confirm-product

http://localhost:3000/user/product
http://localhost:3000/user/cart
http://localhost:3000/user/login
*/