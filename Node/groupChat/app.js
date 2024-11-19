const express = require('express');
const bodyParser = require('body-parser');
const path = require('path')
const fs = require('fs');

const app = express();

app.use(express.json());
app.use(express.static(path.join("./", "public")));
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public'));
})
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', "login.html"));
})
app.get('/message', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'message.html'))
    // res.write(`
    //     <html>
    //         <head>
    //         </head>
    //         <body>
    //          <form>
    //             <label for="user">Message : </label><br>
    //             <input type="text" id="message" name="message" oninput="handleChange(this)" required><br>
    //             <button type="submit">Submit</button>
    //         </form>
            
    //         </body>
    //     </html>
    //     `)
})

let dataPath = path.join(path.dirname(process.mainModule.filename), "data", "msg.json");

const getDataFromFile = (cb) => {
    fs.readFile(dataPath, (err, data) => {
        if (err) {
            return cb([])
        } else {
            cb(JSON.parse(data));
        }
    })
}

app.post('/message', (req, res) => {
    // console.log(req.body);
    getDataFromFile((c) => {
        userInfo.push(req.body)
        fs.writeFile(dataPath, JSON.stringify(userInfo), (err) => {
            console.log(err);
        });
    });
    res.redirect("/message");
})

app.listen('3000', () => {
    console.log("server is running");
})