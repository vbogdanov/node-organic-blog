var util = require("util");
var Organel = require("organic").Organel;

module.exports = function Router(plasma){
  Organel.call(this, plasma);

  this.plasma.on("httpRequest", function(chemical){
    if(chemical.req.url == "/") {
      chemical.type = "render";
      chemical.page = "/index";
      plasma.emit(chemical);
    } else
    if(chemical.req.url == "/about") {
      chemical.type = "render";
      chemical.page = chemical.req.url;
      plasma.emit(chemical);
    } else
      chemical.res.send(404);
    return true;
  });
}

util.inherits(module.exports, Organel);

