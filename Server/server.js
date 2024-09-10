const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method); // Get the URL and the method used in the request

    // Set header content type
    res.setHeader('Content-Type', 'text/html');
    
    // Send an HTML file
    fs.readFile('./Views/index.html', (err, data) => {
        if (err) {
            console.log(err);
        } else {
            res.write(data);
            res.end();
        }
    })

});

server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000');
})