
module.exports = function htmlDirect(app) {
    var path = require("path");

    //Routing to survey page
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "/../public/survey.html"));
    });
    //Routing to home page
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "/../public/home.html"));
    });
}; 

