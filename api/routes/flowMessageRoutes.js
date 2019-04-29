'use strict';
module.exports = function(app) {
  var flowMessage = require('../controllers/flowMessageController');

  // todoList Routes
  app.route('/qna')
    .get(flowMessage.list_all_QNAs)
    .post(flowMessage.create_a_QNA);
}  