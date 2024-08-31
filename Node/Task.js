// Date: 29/08/2024 
// Question 1 :  system file data render on screen

/*
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const bodyData = [];
    const userdata = [];
    if (req.url === '/') {
        res.write("<html>")
        res.write("<head><title>Node JS</title></head>")
        res.write("<body>")
        res.write("<form action = '/message' method = 'POST'>")
        res.write("<input type='text' name = 'usenname' placeholder = 'Enter Your Name'><br><br>")
        res.write("<input type='text' name = 'useremail' placeholder = 'Enter Your Email'><br><br>")
        res.write("<input type='text' name = 'city' placeholder = 'Enter Your City'><br><br>")
        res.write("<button type='submit'>Submit</button>")
        res.write("</form>")
        res.write("</body>")
        res.write("</html>")
        return res.end();
    }
    if (req.url === '/message' && req.method === 'POST') {
        req.on('data', (chunk) => {
            // console.log(chunk);
            bodyData.push(chunk);
            // console.log(bodyData);
        })
        req.on('end', () => {
            const parseData = Buffer.concat(bodyData).toString()
            // console.log(parseData);
            const username = parseData.split('&')[0]
            const useremail = parseData.split('&')[1]
            const usercity = parseData.split('&')[2]
            userdata.push(username,useremail,usercity)
            fs.writeFileSync('aboutme.txt',userdata.toString())
        })
        res.statusCode = 302;
        res.setHeader('Location','/user')
        return res.end()
    }
   if(req.url === '/user'){
    const file_data = fs.readFileSync('aboutme.txt');
    const fileData = file_data.toString();
    const userName = fileData.split(',')[0].split('=')[1]
    const userEmail = fileData.split(',')[1].split('=')[1]
    const userCity = fileData.split(',')[2].split('=')[1]

    res.setHeader('Location', '/user')
    res.write("<head><title>User</title></head>")
    res.write("<body>")
    res.write(`<h2>Name : ${userName}</h2>`)
    res.write(`<h2>Email : ${userEmail}</h2>`)
    res.write(`<h2>City : ${userCity}</h2>`)
    res.write("</body>")
    res.write("</html>")
    return res.end();
   }
})
server.listen(3000)
*/