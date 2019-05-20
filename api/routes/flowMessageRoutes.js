'use strict';
const flowMessage = require("../controllers/flowMessageController");


module.exports = function(app) {
// todoList Routes
  app.route('/qna')
    .get(flowMessage.list_all_QNAs)
    .post(flowMessage.create_a_QNA);

  app.route('/messages')
      .post(flowMessage.create_a_message);

};
