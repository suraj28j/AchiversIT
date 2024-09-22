const express = require('express');
const adminRouters = require('./router/admin');
const shopRouters = require('./router/shop');
const path = require('path')
const bodyParser = require('body-parser');
const { errorController } = require('./controller/product');

const app = express();

app.set('view engine','ejs');
app.set('views','views');

app.use(bodyParser.urlencoded({extended:true}))

// static file access
app.use(express.static(path.join(__dirname,'public')))

app.use('/admin',adminRouters)
app.use(shopRouters)

app.use(errorController)

app.listen(3000,()=>{
    console.log('server is running');
})