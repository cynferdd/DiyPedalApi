var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000
  mongoose = require('mongoose'),
  Pedal = require('./api/models/DiyPedalApiModel'), //created model loading here
  bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/DiyPedalDb'); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



var routes = require('./api/routes/DiyPedalApiRoutes'); //importing route
routes(app); //register the route

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
  });

app.listen(port);

console.log('Diy Pedals Projects RESTful API server started on: ' + port);