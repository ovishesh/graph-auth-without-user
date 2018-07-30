var auth = require('./auth');
var graph = require('./graph');

var appRouter = function (app) {
    app.get("/", function(req, res) {
        res.status(200).send("Welcome to our restful API");
    });

    app.get("/ping", function(req, res) {
        res.status(200).send("Healthy Ping!");
    });

    app.get("/auth", function(req, res) {
        // Get an access token for the app.
        auth.getAccessToken().then(function (token) {
            // Get all of the users in the tenant.
            graph.getUsers(token)
            .then(function (users) {
                // Create an event on each user's calendar.
                res.status(200).send(users);
                //graph.createEvent(token, users);
            }, function (error) {
                console.error('>>> Error getting users: ' + error);
                res.status(400).send('>>> Error getting users:' + error);
            });
        }, function (error) {
            console.error('>>> Error getting access token: ' + error);
            res.status(400).send('>>> Error getting users:' + error);
        });
    });
}
  module.exports = appRouter;