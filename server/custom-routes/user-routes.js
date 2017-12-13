let Home = require('../models/home')
let Users = require('../models/user')

module.exports = {
    userhome: {
        path: '/userhome',
        reqType: 'get',
        method(req, res, next) {
            let action = 'Find User home'
            home.find({ creatorId: req.session.uid })
                .then(home => {
                    res.send(handleResponse(action, home))
                }).catch(error => {
                    return next(handleResponse(action, null, error))
                })
        }
    },
    sharedhome: {
        path: '/sharedhome',
        reqType: 'get',
        method(req, res, next) {
            home.find({ collaborators: { $in: req.session.uid } })
                .then(home => {
                    res.send(handleResponse(action, home))
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