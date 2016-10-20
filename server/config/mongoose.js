var mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/mini_store");

var fs = require('fs');
var path = require('path');

var models_path = path.join(__dirname, "./../models")
fs.readdirSync(models_path).forEach(function(file){
  if(file.indexOf(".js") >= 0){
    require(path.join(models_path, file));
  }
});
