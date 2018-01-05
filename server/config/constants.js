const actions = {
    create: 'Create',
    update: 'Update',
    remove: 'Remove',
    find: 'Find',
    findAll: 'Find All'
}

const models = {
    home: {
        name: 'Home',
        endpoint: 'home',
        useCustomRoutes: true
    },
    login: {
        name: 'Login',
        endpoint: 'login',
        useCustomRoutes: true
    },
}


module.exports = {
    actions,
    models
}