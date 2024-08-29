const http = require('http');
// const imgUrl = 'https://www.achieversit.com/assets/images/logo-white.png'
const path =  require('path')
const filename = path.basename('./')


function requestListnerCb(req,res){
    console.log("Server is runing");
    res.setHeader("Content-Type","text/html");
    res.write("<html>")
    res.write("<head><title>My Profile</title></head>")
    res.write(`<img src ="${filename}"+  >`)
    res.write("<h1>Hello ! my name is Suraj</h1>");
    res.write("<p>Learning Node JS</p>")
    res.write("<input type='text'><br><br>")
    res.write("<button>Submit</botton>")
    res.write("</html>")
    res.end();
}
const server = http.createServer(requestListnerCb);
server.listen(3000)