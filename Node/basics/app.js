const http = require('http');
const fs = require('fs')
// const path =  require('path')
// const filename = path.dirname('./pic.webp')


// function requestListnerCb(req,res){
//     console.log("Server is runing");
//     // console.log(filename);
//     res.setHeader("Content-Type","text/html");
//     res.write("<html>")
//     res.write("<body>")
//     res.write("<head><title>My Profile</title></head>")
//     res.write(`<img src ="${filename}"+  >`)
//     res.write("<h1>Hello ! my name is Suraj</h1>");
//     res.write("<p>Learning Node JS</p>")
//     res.write("<input type='text'><br><br>")
//     res.write("<button>Submit</botton>")
//     res.write("</body>")
//     res.write("</html>")
//     res.end();
// }

const server = http.createServer((req, res) => {
    // console.log(req);
    let fileData;
    if (req.url === "/") {
        res.write("<html>")
        res.write("<head><title>Form</title></head>")
        res.write("<body>")
        res.write("<form method='POST' action='/message'><input type='text' name = 'message'><button type ='submit'>Submit</botton></form>")
        res.write("</body>")
        res.write("</html>")
        return res.end();
    }
    if(req.url === '/message' && req.method === 'POST'){

        let bodyData = [];
        // let fileData;
        req.on('data',(chunk)=>{
            // console.log(chunk);
            bodyData.push(chunk);
            console.log(bodyData);
        })
        req.on('end',()=>{
            let parseData = Buffer.concat(bodyData).toString()
            // console.log(parseData);
            const message = parseData.split("=")[1]
            console.log(message);
            fs.writeFileSync('dummy.txt',message);    
             fileData = fs.readFileSync('./dummy.txt',{
                encoding:'utf-8',flag:'r'
            })
            console.log(fileData);
        })
        res.statusCode = 302;
        // res.setHeader('Location','/');
        
        // res.write("<html>")
        // res.write("<body>")
        // res.write("<head><title>My Profile</title></head>")
        // res.write(`<h1>${fileData}</h1>`);
        // res.write("</body>")
        // res.write("</html>")
        
        // return res.end();
    }
    res.setHeader("Content-Type", "text/html");
    res.write("<html>")
    res.write("<body>")
    res.write("<head><title>My Profile</title></head>")
    res.write(`<h1>${fileData}</h1>`);
    // res.write("<h1>Hello ! my name is Suraj</h1>");
    res.write("</body>")
    res.write("</html>")
    res.end();

});

server.listen(3000)