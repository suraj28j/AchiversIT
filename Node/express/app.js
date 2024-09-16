const express = require('express');

const app = express();

app.use('/add-product',(req,res,next)=>{
    res.send('<h2>Add-Product Page</h2>')
    console.log('In Add-Product end point');
});

app.use('/',(req,res,next)=>{
    console.log('In a second middleware function');
    res.send('<h2>Hello from express server</h2>')
})

app.listen(3000,()=>{
    console.log('server is running');
})