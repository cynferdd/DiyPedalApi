'use strict';
module.exports = function(app){
    var todoList = require('../controllers/DiyPedalApiController');

    // todoList Routes
    app.route('/pedals')
        .get(todoList.ListAllPedals)
        .post(todoList.CreatePedal);
        
    app.route('/pedals/:pedalId')
        .get(todoList.GetPedal)
        .put(todoList.UpdatePedal)
        .delete(todoList.DeletePedal);
};