// console.log("Hello")
const http = require('http');
const fs = require('fs');
const hostName = '127.0.0.2';
const port = 3000;

const home = fs.readFileSync('./index.html');
const about = fs.readFileSync('./about.html');
const services = fs.readFileSync('./services.html');
const contact = fs.readFileSync('./contact.html');

const server = http.createServer((req, res) => {
    console.log(req.url);
    url = req.url;

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');

    res.end(home);
    
    if (url = "/index.html") {
        res.end(home);
    }
    else if (url == "/about") {
        res.end(about);
    }
    else if (url == "/services") {
        res.end(services);
    }
    else if (url == "/contact") {
        res.end(contact);
    }
    else {
        res.statusCode = 404;
        res.end("404 not found")
    }
});

server.listen(port, hostName, () => {
    console.log((`Server running at http://${hostName}:${port}/`));
});
