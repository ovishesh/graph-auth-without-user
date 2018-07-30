//Entry point for the API.

require('dotenv').config()
var express = require("express");
const bodyParser = require("body-parser");
var routes = require("./routes.js");
var app = express();

var port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//routes.js acting as the intermediatry to route requests
routes(app);

//exposing port defined above through express
var server = app.listen(port, function () {
    console.log("app running on port.", server.address().port);
});