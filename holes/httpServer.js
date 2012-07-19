var express = require('express');
var Chemical = require("organic").Chemical;

module.exports = function HttpServer(plasma){
  var app = require('express').createServer();
  app.get('*', function(req, res){
    var chemical = new Chemical();
    chemical.req = req;
    chemical.res = res;
    chemical.type = "httpRequest";
    plasma.emit(chemical);
  });
  app.listen(1337);
  console.log('Server running at http://127.0.0.1:1337/');  
}