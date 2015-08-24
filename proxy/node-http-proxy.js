var httpProxy = require('http-proxy');
var express = require('express');
var server = express();

// Create proxy server and set target
httpProxy.createProxyServer({ target:'http://localhost:9000' }).listen(8000);

// Navigate to http://localhost:8000/u or http://localhost:9000/u to see log
server.get('/u', function(req, res) {
  console.log('proxied!')
  res.send(200);
});

server.listen(9000);
