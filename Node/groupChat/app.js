const express = require('express');
const bodyPrser = require('body-parser');
const path = require('path');
const fs = require('fs');

const app = express();

app.use(bodyPrser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set('view engine', 'ejs');
app.set('views', 'views');


app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, "public", "login.html"));
})
app.post("/login", (req, res) => {
    const { username } = req.body;
    fs.readFile(path.join(__dirname, 'data', 'message.json'), (err, data) => {
        if (err) {
            console.log(err);
        } else {
            res.render('chat', { chats: JSON.parse(data) })
        }
    })
})

app.get("/chat", (req, res) => {
    fs.readFile(path.join(__dirname, 'data', 'message.json'), (err, data) => {
        if (err) {
            console.log(err);
        } else {
            res.render('chat', { chats: JSON.parse(data) })
        }
    })
})
app.post("/chat", (req, res) => {
    fs.readFile(path.join(__dirname, 'data', 'message.json'), (err, data) => {
        if (err) {
            console.log(err);
        } else {
            let parseData = JSON.parse(data);
            const { message, username } = req.body;
            parseData.push({ username, message });

            fs.writeFile(path.join(__dirname, "data", "message.json"), JSON.stringify(parseData), (err) => {
                if (err) {
                    console.log("ERROR POST : ", err);
                }
            })
            res.render('chat', { chats: parseData })
        }
    })
})

app.use("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "home.html"));
})

app.listen(3000, () => {
    console.log("App is listing PORT 3000");
})
