'use strict';

const http = require('http');
const fs = require('fs');

const server = http.createServer(function (request, response) {
    console.log(request.method, request.url);
    if (request.url == '/style.css') {
        console.log('read css');
        const css = fs.readFileSync('style.css', 'utf-8');
        response.end(css);
    } else {
        const text = fs.readFileSync('index.html', 'utf-8');
        response.end(text);
    }
})

const port = process.env.PORT || 3000;
server.listen(port);
console.log('server started on port ', port);