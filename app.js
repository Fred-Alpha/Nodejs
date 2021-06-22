var http = require('http');

var express = require('./express_api/express');
var common = require("./common/common");

//var port = 8100;
var port = common.expressport;

http.createServer(function handler(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
}).listen(port, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');



