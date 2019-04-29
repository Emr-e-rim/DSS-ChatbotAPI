'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TaskSchema = new Schema({
  question: {
    type: String,
    required: 'Kindly enter the question'
  },
  anwser: {
    type: String,
    required: 'Kindly enter the anwser'
  }
});

module.exports = mongoose.model('Tasks', TaskSchema);