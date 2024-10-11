const express = require("express");
const bodyParser = require('body-parser');
const path = require('path');
const UserRouter = require('./router/user.js')

const app = express();

app.set('view engine',"ejs");
app.set("views","views");

app.use(express.static(path.join(__dirname,'public')));

app.use(bodyParser.urlencoded({extends:true}));
app.use(UserRouter)

app.listen(3000,()=>{
    console.log("server is running 3000");
})