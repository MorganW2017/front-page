let Boards = require('../models/board')
let Lists = require('../models/list')
let Tasks = require('../models/task')

module.exports = {
    boardTasks: {
        path: '/boards/:boardId/lists/:listId/tasks',
        reqType: 'get',
        method(req, res, next) {
            let action = 'Find List Tasks'
            Tasks.find({ listId: req.params.listId })
                .then(Tasks => {
                    res.send(handleResponse(action, Tasks))
                }).catch(error => {
                    return next(handleResponse(action, null, error))
                })
        }
    }
}

function handleResponse(action, data, error) {
    var response = {
        action: action,
        data: data
    }
    if (error) {
        response.error = error
    }
    return response
}