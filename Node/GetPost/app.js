const express = require("express");
const server = express();
const bodyParser = require("body-parser");

server.listen(3000, () => {
    console.log("Server is running");
})
server.use(bodyParser.json());
//server.use(bodyParser.urlencoded())


const data = [{
    id: 1,
    name: "ajay",
    age: 34,
    result: {
        rank: 1,
        score: 90
    }
},
{
    id: 2,
    name: "ram",
    age: 22,
    result: {
        rank: 3,
        score: 80
    }
},
{
    id: 3,
    name: "prakash",
    age: 30,
    result: {
        rank: 3,
        score: 88
    }
},
{
    id: 4,
    name: "suraj",
    age: 32,
    result: {
        rank: 4,
        score: 78
    }
}
]


// path params // 
// http://localhost:3000/home/GBPant/Lucknow //
server.get("/home/:name/:city", (req, res) => {
    let clgName = req.params.name;
    let city = req.params.city;
    res.json({ Name: clgName, City: city });
})

// query string //
// http://localhost:3000/home?name=Suraj&age=32 //
server.get("/home", (req, res) => {
    let userName = req.query.name;
    let userAge = req.query.age;
    res.json({ Name: userName, Age: userAge });
})

server.post("/persone", (req, res) => {
    let cName = req.body.name;
    let cAge = req.body.age;
    let cCity = req.body.city;
    res.json({ Name: cName, Age: cAge, City: cCity });
})

server.get("/userid/:id",(req,res)=>{
    let fd=req.params.id;
    let v;
    data.find(x=>{
        if(x.id==fd)
        v=x;
        console.log(x);
    })
    res.status(200).send({message:"Successfully fetch used data", data:v});
})
// })

// create api to get user data by id
// create api to get user data by rank
// create api to add user record in data and return same 
// create api to update user record in data and return same 