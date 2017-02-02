/**
 * Created by ereye on 11/28/2016.
 */
var path = require("path");


var development = require("./env/development.js");
// var test = require("./env/test");
// var production = require("./env/production");

var defaults = {
   root: path.normalize(__dirname + '/..')
};

module.exports = {
   development: Object.assign(development,defaults),
   // test: Object.assign(test,defaults),
   // production: Object.assign(production,defaults)
};

