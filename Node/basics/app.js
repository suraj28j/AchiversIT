const http = require('http');
const routes = require('./routes')
console.log(routes);



// function requestListnerCb(req,res){
//     console.log("Server is runing");
//     console.log("URL : ",request.url);
//     console.log("Method : ",request.method);
//     console.log("Headers : ",request.headers);

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

// requestListnerCb is a plan CB function which is going to take request and respone as a parameter

const server = http.createServer(routes);

server.listen(3000)