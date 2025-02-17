const express = require('express');
const server = express();

server.get("/login",(req,res)=>{
    // let name = req.query.name;
    // let age = req.query.age;
    let {name,age} = req.query;
    if(age>18){
        res.send(`Hello Mr. ${name} you are eligible`);
    }else{
        res.send(`Hello Mr. ${name} you are not eligible`);
    }
})

server.get("/user/:name/:age",(req,res)=>{
    let name = req.params.name;
    let age = req.params.age;
    res.send(`Hello Mr. ${name} you age is ${age}`);
})
server.listen(3000,()=>{
    console.log("Server is running");
})