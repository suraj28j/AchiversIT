const express = require('express');
const bodyParser = require('body-parser');
const path = require('path')
const fs = require('fs');

const app = express();

app.use(express.static(path.join("./", "public")));
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public'));
})
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', "login.html"));
})

app.post('/login', (req, res) => {
    const user = req.body.user
    // console.log(user);
    // fs.writeFile('users',user,(err)=>{
    //     console.log(err); 
    // })
    res.sendFile(path.join(__dirname, 'public', "chat.html"));
    res.user = user;
})

app.post('/chat', (req, res) => {
    const user = req.body.user
    console.log(user);
    
    // fs.writeFile('users',user,(err)=>{
    //     console.log(err); 
    // })
    // res.sendFile(path.join(__dirname, 'public', "chat.html"));
})

app.listen('3000', () => {
    console.log("server is running");
})