'use strict';


var mongoose = require('mongoose'),
  Pedal = mongoose.model('Pedals');

exports.ListAllPedals = function(req, res) {
    Pedal.find({}, function(err, pedal) {
    if (err)
      res.send(err);
    res.json(pedal);
  });
};




exports.CreatePedal = function(req, res) {
  var newPedal = new Pedal(req.body);
  newPedal.save(function(err, pedal) {
    if (err)
      res.send(err);
    res.json(pedal);
  });
};


exports.GetPedal = function(req, res) {
    Pedal.findById(req.params.pedalId, function(err, pedal) {
    if (err)
      res.send(err);
    res.json(pedal);
  });
};


exports.UpdatePedal = function(req, res) {
    Pedal.findOneAndUpdate({_id: req.params.pedalId}, req.body, {new: true}, function(err, pedal) {
    if (err)
      res.send(err);
    res.json(pedal);
  });
};


exports.DeletePedal = function(req, res) {


    Pedal.remove({
    _id: req.params.pedalId
  }, function(err, pedal) {
    if (err)
      res.send(err);
    res.json({ message: 'Pedal successfully deleted' });
  });
};