const http = require('http');

function requestListnerCb(req,res){
    console.log("Server is runing");
    process.exit()
    // console.log(req);
    
}
const server = http.createServer(requestListnerCb);
server.listen(3000)