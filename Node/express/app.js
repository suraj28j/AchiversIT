const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const adminRouter = require('./router/admin')
const shopRouter = require('./router/shop')

app.use(bodyParser.urlencoded({extended:true}))

app.use("/admin",adminRouter);
app.use(shopRouter);

app.use((req,res,next)=>{
    res.send("<h1>Page Not Found</h1>")
})
app.listen(3000);



/*
http://localhost:3000/admin/add-product
http://localhost:3000/admin/edit-product
http://localhost:3000/admin/confirm-product

http://localhost:3000/user/product
http://localhost:3000/user/cart
http://localhost:3000/user/login
*/