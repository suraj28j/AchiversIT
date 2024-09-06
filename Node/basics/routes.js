const fs = require('fs')

const requestHandler = (req, res) => {
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
    if (req.url === '/message' && req.method === 'POST') {
        let bodyData = [];
        // let fileData;
        req.on('data', (chunk) => {
            // console.log(chunk);
            bodyData.push(chunk);
            console.log(bodyData);
        })
        return req.on('end', () => {
            let parseData = Buffer.concat(bodyData).toString()
            // console.log(parseData);
            // const message = parseData.split("=")[1]
            // console.log(message);
            // fs.writeFileSync('dummy.txt',message);  
            fs.writeFile('dummy.txt', parseData, (err) => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });

    }
    res.setHeader("Content-Type", "text/html");
    res.write("<html>")
    res.write("<body>")
    res.write("<head><title>My Profile</title></head>")
    res.write("<h1>Hello ! my name is Suraj</h1>");
    res.write("</body>")
    res.write("</html>")
    res.end();
}

module.exports = requestHandler;

// const suraj = () => {}

// module.exports = {
//     handler:requestHandler,
//     data:"dummy.txt",
//     nameFunction:suraj
// }