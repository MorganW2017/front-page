var models = require('../config/constants').models
let mongoose = require('mongoose')
let ObjectId = mongoose.Schema.ObjectId

var schema = new mongoose.Schema({
    message: { type: String, required: true },
    created: { type: Number, default: Date.now() },
    boardId: { type: ObjectId, ref: models.board.name, required: true },
    listId: {type: ObjectId, ref: models.list.name, required: true},
    taskId: {type: ObjectId, ref: models.task.name, required: true}
});

module.exports = mongoose.model(models.comment.name, schema);