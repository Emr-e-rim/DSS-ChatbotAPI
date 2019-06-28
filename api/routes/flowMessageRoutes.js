'use strict';
const flowMessage = require("../controllers/flowMessageController");


module.exports = function(app) {
// Old flow.ai version. Was going to be used to save data from FLow.AI into the DB
  app.route('/qna')
    .get(flowMessage.list_all_QNAs)
    .post(flowMessage.create_a_QNA);


  //GET: show every message in the DB
  //POST: save a message to the DB
  app.route('/messages')
      .post(flowMessage.create_a_message)
      .get(flowMessage.list_all_messages);

//This is used to show a random single value from the DB. This was used for the sentiment dashboard on the showcase.
  app.route('/messages/single')
      .get(flowMessage.list_a_message);
};
