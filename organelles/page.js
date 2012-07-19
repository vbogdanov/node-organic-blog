var util = require("util");
var Organel = require("organic").Organel;
var cons = require("consolidate");
var fs = require("fs");

module.exports = function Page(plasma){
  Organel.call(this, plasma);

  plasma.on("render", function(chemical){
    if(!chemical.page)
      chemical.res.send("Hello My Cell");
    else
      cons.jade(process.cwd()+"/template"+chemical.page+".jade", chemical.data || {}, function(err, renderedData){
        if(err) throw err;
        chemical.res.send(renderedData);
      });
    return true;
  });
}

util.inherits(module.exports, Organel);