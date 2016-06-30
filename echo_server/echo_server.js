var express = require('express');


var app = express();

var getHeader = function () {
  app.get('/headers', function (request, response) {
    response.json({
      header: request.headers
    });
  });
}

var getHeaderName = function () {
  app.get('/headers/:header_name', function (request, response) {
    var header_name = request.params.header_name;
    // var headers = request.headers;

    response.json({
      userAgent: request.headers[header_name]
    });
  });
}


var getVersion = function () {
  app.get('/version', function (request, response) {
    response.json({
      version: request.httpVersion
    });
  });
}

var sayHello = function () {
  console.log('hi');
}

exports.sayHello = sayHello;
exports.getHeader = getHeader;
exports.getHeaderName = getHeaderName;
exports.getVersion = getVersion;

app.listen(8080);

//hi
