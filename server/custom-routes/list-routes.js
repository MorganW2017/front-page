let Boards = require('../models/board')
let Lists = require('../models/list')

module.exports = {
    boardLists: {
        path: '/boards/:boardId/lists',
        reqType: 'get',
        method(req, res, next) {
            let action = 'Find Board Lists'
            Lists.find({ boardId: req.params.boardId })
                .then(Lists => {
                    res.send(handleResponse(action, Lists))
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