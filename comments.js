const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/about') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello');
    } else {
        res.statusCode = 404;
        res.end();
    }
});

server.listen(3000, 'localhost', () => {
    console.log('Server running at http://localhost:3000/');
});

