
//express is used to create a server to create a REST api

var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;
  mongoose = require('mongoose'),
  Task = require('./api/models/flowMessageModel'), //created model loading here
       ChatSchema = require('./api/models/flowMessageModel'), //created model loading here
  bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Flowdb');

app.use(function(req, res, next) {
    // Website you wish to allow to connect

    //TODO set Access-control-Allow-Origin to the right URL instead of making it fully public

    res.header("Access-Control-Allow-Origin", "*");

    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let routes = require('./api/routes/flowMessageRoutes'); //importing route
routes(app); //register the route

app.use(function(req, res, next) {





    res.status(404).send({url: req.originalUrl + ' not found'});

    next();


});

app.listen(port);

console.log(' RESTful API server started on: ' + port);
