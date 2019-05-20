'use strict';


let mongoose = require('mongoose'),
  Task = mongoose.model('Tasks'),
  ChatSchema = mongoose.model('ChatSchema');

exports.list_all_QNAs = function(req, res) {
  Task.find({}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.create_a_QNA = function(req, res) {
  let new_task = new Task(req.body);
  new_task.save(function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.create_a_message = function (req, res) {
  let new_task = new ChatSchema(req.body);
  new_task.save(function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });

};




