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
    user: {
        name: 'User',
        endpoint: 'users',
        preventDefaultApi: true,
        useCustomRoutes: true
    }
}


module.exports = {
    actions,
    models
}