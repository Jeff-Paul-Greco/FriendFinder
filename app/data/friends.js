
var fs = require("fs");
var path = require("path");

var data = fs.readFileSync(path.join(__dirname, "friends.json"));
var friends = JSON.parse(data);

module.exports = friends;