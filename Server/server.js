const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method); // Get the URL and the method used in the request

    // Set header content type
    res.setHeader('Content-Type', 'text/html');

    let path = './Views/';
    switch (req.url) {
        case '/':
            path += 'index.html';
            break;s
        case '/about':
            path += 'about.html';
            break;
        default:
            path += '404.html';
            break;
    }
    
    // Send an HTML file
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
        } else {    
            res.end(data);
        }
    })

});

server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000');
})