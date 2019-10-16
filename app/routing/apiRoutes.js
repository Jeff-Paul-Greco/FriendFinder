module.exports = function apiDirect(app) {

    var fs = require("fs");
    var path = require("path");

    var friends = require("./../data/friends.js");

    app.get("/api/friends", function (req, res) {
       console.log("test");
       return res.json(friends);
    });

    app.post("/api/friends", function (req, res) {

        var newArray = [];
        var difference;
        var newFriend = req.body;

        for (var i = 0; i < friends.length; i++) {

            difference = 0;

            for (var j = 0; j < newFriend.scores.length; j++) {

                difference += Math.abs(friends[i].scores[j] - newFriend.scores[j]);

            };

            newArray.push(difference);

        };

        var match = newArray.indexOf(Math.min(...newArray));

        friends.push(newFriend);

        fs.readFile(path.join(__dirname, "../data/friends.json"), "utf8", function (err, data) {
            if (err) throw err;

            var jsonParsed = JSON.parse(data);

            jsonParsed.push(newFriend);
            
            fs.writeFile(path.join(__dirname, "../data/friends.json"), JSON.stringify(jsonParsed, null, 2), function (err) {
                if (err) throw err;
            });

        });

        res.json(friends[match]);

    });
}