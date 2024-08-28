const http = require('http');

function requestListnerCb(req,res){
    console.log("Server is runing");
    res.setHeader("Content-Type","text/html");
    res.write("<html>")
    res.write("<head><title>My Profile</title></head>")
    res.write("<h1>Hello ! my name is Suraj</h1>");
    res.write("<p>Learning Node JS</p>")
    res.write("<input type='text'><br>")
    res.write("<button>Submit</botton>")
    res.write("</html>")
    res.end();
}
const server = http.createServer(requestListnerCb);
server.listen(3000)