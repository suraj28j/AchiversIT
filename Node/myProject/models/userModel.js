const fs = require('fs');
const path = require('path');

const dataPath = path.join(
    path.dirname(process.mainModule.filename),
    "data",
    "data.json"
);

const getDataFromFile = (cb) => {
    fs.readFile(dataPath, (err, data) => {
        if (err) {
            return cb([]);
        } else {
            cb(JSON.parse(data));
        }
    })
}


module.exports = class User {
    constructor(username, email, password, phone) {
        this.username = username;
        this.email = email,
            this.password = password,
            this.phone = phone
    }
    save() {
        getDataFromFile((userdata) => {
            userdata.push(this)
            console.log("This Data : ", this);

            fs.writeFile(dataPath, JSON.stringify(userdata), (error) => {
                console.log(error);
            })
        })
    }
    static findById(email, cb) {
        getDataFromFile((data) => {
            const userData = data.find((user) => user.email === email);
            cb(userData);
        })
    }
}