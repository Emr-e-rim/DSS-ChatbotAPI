'use strict';


let mongoose = require('mongoose'),
  Task = mongoose.model('Tasks'),
  ChatSchema = mongoose.model('ChatSchema');

//Both qna maker exports where used to convert flow.ai to qnamaker but it was never used

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


exports.list_a_message = function(req, res) {


  ChatSchema.count().exec(function (err, count) {

    var random = Math.floor(Math.random() * count)

    // this will return a single random chat from the DB. This was used for the showcase sentiment project
    ChatSchema.findOne().skip(random).exec(
        function (err, result) {
          // Tada! random chat
          console.log(result);

          if (err)
            res.send(err);
          res.json(result);
        })
  })
};
//this will display all the messages currently in the database
//TODO show
exports.list_all_messages = function(req, res) {
  ChatSchema.find({}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


//This function will save a new record to the DB using a post request.
exports.create_a_message = function (req, res) {
  let new_task = new ChatSchema(req.body);
  new_task.save(function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });

};




