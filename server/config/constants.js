const actions = {
    create: 'Create',
    update: 'Update',
    remove: 'Remove',
    find: 'Find',
    findAll: 'Find All'
}

const models = {
    board: {
        name: 'Board',
        endpoint: 'boards',
        useCustomRoutes: true
    },
}


module.exports = {
    actions,
    models
}