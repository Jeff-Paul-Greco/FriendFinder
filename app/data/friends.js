
var fs = require("fs");
var path = require("path");

//Importing JSON objects from friends.json and parsing them for use
var data = fs.readFileSync(path.join(__dirname, "friends.json"));
var friends = JSON.parse(data);

module.exports = friends;