module.exports = function apiDirect(app) {

    var fs = require("fs");
    var path = require("path");

    var friends = require("./../data/friends.js");

    //Retrieval call for friends object 
    app.get("/api/friends", function (req, res) {
       console.log("test");
       return res.json(friends);
    });

    //Post a new friend into the array
    app.post("/api/friends", function (req, res) {

        var newArray = [];
        var difference;
        var newFriend = req.body;

        //Calculating differences in scores from each friend's set of scores
        for (var i = 0; i < friends.length; i++) {

            difference = 0;

            for (var j = 0; j < newFriend.scores.length; j++) {

                difference += Math.abs(friends[i].scores[j] - newFriend.scores[j]);

            };

            newArray.push(difference);

        };

        //call Math.min to filter for lowest number in the differences array that has been passed into newArray
        var match = newArray.indexOf(Math.min(...newArray));

        friends.push(newFriend);

        //reading friends array and parsing 
        fs.readFile(path.join(__dirname, "../data/friends.json"), "utf8", function (err, data) {
            if (err) throw err;

            var jsonParsed = JSON.parse(data);

            //pushing new friend to array
            jsonParsed.push(newFriend);
            

            //writing to friends.json file
            fs.writeFile(path.join(__dirname, "../data/friends.json"), JSON.stringify(jsonParsed, null, 2), function (err) {
                if (err) throw err;
            });

        });

        //returning match
        res.json(friends[match]);

    });
}