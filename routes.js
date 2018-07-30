var auth = require('../auth');
var graph = require('../graph');

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

    app.post("/getAllDocuments", function(req, res) {
        if(req.body.clientkey == 'khtdkhtfkuygljgfkytdutrd')
        {
            auth.getAccessToken().then(function (token) {
                graph.getKbArticles(token, req.body.id).then(function (htmlResponse){
                    res.status(200).send(htmlResponse);
                });
                
            }, function (error) {
                console.error('>>> Error getting access token: ' + error);
                res.status(400).send('>>> Error getting users:' + error);
            });
        }
        else
        {
            res.status(200).send("Invalid key");
        }
        
    });
}
  module.exports = appRouter;