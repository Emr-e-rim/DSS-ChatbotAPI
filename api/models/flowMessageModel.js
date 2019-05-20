'use strict';
const mongoose = require('mongoose');

let Schema = mongoose.Schema;
let requirement= "please fill this in";


let TaskSchema = new Schema({
  question: {
    type: String,
    required: 'Kindly enter the question'
  },
  anwser: {
    type: String,
    required: 'Kindly enter the anwser'
  }
});

let ChatSchema = new Schema ({
  inputMessage:{
    type: String,
    required: requirement
  },

  responseMessage:{
    type: String,
    required: requirement
  },

  luisIntent:{
    type: String,
    required: requirement
  },

  sentimentScore:{
    type: Number,
    required: requirement
  }
});

module.exports = mongoose.model('Tasks', TaskSchema);
module.exports = mongoose.model('ChatSchema', ChatSchema);

