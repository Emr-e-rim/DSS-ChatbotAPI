'use strict';
const mongoose = require('mongoose');

let Schema = mongoose.Schema;
let requirement= "please fill this in";




//this was the old  version of the api and is currently no longer in use. The purpose of this part was to save data from
//flow.ai. The naming is because of a tutorial on the internet
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


//this is the object that is being used for every message. The data that is being saved are the respnses, the input message, the intent
//generated by LUIS and the sentiment provided by the sentiment API
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
  }
});

module.exports = mongoose.model('Tasks', TaskSchema);
module.exports = mongoose.model('ChatSchema', ChatSchema);

