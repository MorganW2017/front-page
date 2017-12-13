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
}


module.exports = {
    actions,
    models
}