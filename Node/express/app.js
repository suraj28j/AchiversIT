const express = require('express');
const adminRouters = require('./router/admin');
const shopRouters = require('./router/shop');
const path = require('path')
const bodyParser = require('body-parser');
const { errorController } = require('./controller/product');
const mongoose = require('mongoose')

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: true }))

// static file access
app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin', adminRouters)
app.use(shopRouters)

app.use(errorController)

// mongoose.connect(process.env.MANGO_URI)

mongoose
    .connect('mongodb+srv://suraj28j:testingdb@cluster0.nehjs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(console.log('Connection established'),app.listen(3000))
    .catch(err => console.log(err))
    
// app.listen(3000,()=>{
//     console.log('server is running');
// })