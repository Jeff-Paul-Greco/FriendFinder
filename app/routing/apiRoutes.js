module.exports = function apiDirect(app) {

    var fs = require("fs");
    var path = require("path");

    var friends = require("./../data/friends.js");

    app.get("/api/friends", function (req, res) {
       console.log("test");
       return res.json(friends);
    });

    app.post("/api/friends", function (req, res) {
       
    });
}