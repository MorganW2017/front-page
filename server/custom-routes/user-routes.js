let Home = require('../models/home')
let Users = require('../models/user')

module.exports = {
    userHome: {
        path: '/userboards',
        reqType: 'get',
        method(req, res, next) {
            let action = 'Find User Home'
            Home.find({ creatorId: req.session.uid })
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